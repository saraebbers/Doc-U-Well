import { isLoading, hasErrored, addAppointments } from '../../actions/index';
import { addAppointmentThunk } from './postAppointmentThunk.js';

describe('postAppointmentThunk', () => {
  let mockUrl
  let mockDispatch
  let mockAppointment
  let mockErrorMsg
  let mockResponse
  let mockUser

  beforeEach(() => {
    mockUrl = 'https://my-health-tracker.herokuapp.com/api/v1/appointments'
    mockDispatch = jest.fn()
    mockAppointment = {date: 'Feb 14, 2019', time: '9:00 am', reason: 'Annual checkup', provider: 'Dr. Love', location: '124 Street Rd. Midlothian, VA 45459'}
    mockErrorMsg = 'did not work'
    mockUser={id: 1, attributes: {
      api_key: '123'
    }}
  })

  it('calls dispatch with the isLoading action with true value prior to the fetch call', () => {
    const thunk = addAppointmentThunk(mockUrl, mockUser)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          statusText: 'did not work'
      }))
    const thunk = addAppointmentThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(mockErrorMsg))
  })

  it('should dispatch isLoading action with false value if the response comes back ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true
      }))
    const thunk = addAppointmentThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

    it('should dispatch addAppointments action', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: mockAppointment
      })
    }))
    const thunk = addAppointmentThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(addAppointments(mockAppointment))
  })

})
