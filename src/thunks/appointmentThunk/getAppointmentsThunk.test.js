import { isLoading, hasErrored, getAppointments } from '../../actions/index';
import { getAppointmentsThunk } from './getAppointmentsThunk.js';

describe('getAppointmentsThunk', () => {
  let mockUrl
  let mockDispatch
  let mockAppointments

  beforeEach(() => {
    mockUrl = 'https://my-health-tracker.herokuapp.com/api/v1/appointments'
    mockDispatch = jest.fn()
    mockAppointments = [{date: 'Feb 14, 2019', time: '9:00 am', reason: 'Annual checkup', provider: 'Dr. Love', location: '124 Street Rd. Midlothian, VA 45459'}, {date: 'Jan 24, 2019', time: '7:00 am', reason: 'dentist', provider: 'Dr. FeelGood', location: '555 Street Rd. Denver, CO 88888'}, {date: 'June 4, 2019', time: '5:00 pm', reason: 'lab-work', provider: 'n/a', location: '14 Green Blvd. Beach, CA 00087'},{date: 'Feb 14, 2019', time: '9:00 am', reason: 'Annual checkup', provider: 'Dr. Love', location: '124 Street Rd. Midlothian, VA 45459'}, {date: 'Jan 24, 2019', time: '7:00 am', reason: 'dentist', provider: 'Dr. FeelGood', location: '555 Street Rd. Denver, CO 88888'}, {date: 'June 4, 2019', time: '5:00 pm', reason: 'lab-work', provider: 'n/a', location: '14 Green Blvd. Beach, CA 00087'}]
  })

  it('calls dispatch with the isLoading action with true value prior to the fetch call', () => {
    const thunk = getAppointmentsThunk(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          statusText: 'did not work'
      }))
    const thunk = getAppointmentsThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('did not work'))
  })

  it('should dispatch isLoading action with false value if the response comes back ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true
      }))
    const thunk = getAppointmentsThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

    it('should dispatch getAppointments action', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: mockAppointments
      })
    }))
    const thunk = getAppointmentsThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(getAppointments(mockAppointments))
  })

})