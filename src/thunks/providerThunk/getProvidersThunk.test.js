import { isLoading, hasErrored, getProviders } from '../../actions/index';
import { getAllProvidersThunk } from './getProvidersThunk.js';

describe('getProvidersThunk', () => {
  let mockUrl
  let mockDispatch
  let mockProviders

  beforeEach(() => {
    mockUrl = 'https://my-health-tracker.herokuapp.com/api/v1/providers'
    mockDispatch = jest.fn()
    mockProviders = [{name: 'DDS. Bob FeelGood', clinic: 'Green Clinic', address: '123 Red Road, Greenville, SC 12345', phone: '234-234-2313', speciality: 'Cardio'}, {name: 'Dr. Sue Happy', clinic: 'Red Clinic', address: '4444 Shadow Lane, Daytona, FL 78987', phone: '674-234-6783', speciality: 'Orthodontics'} ]
  })

  it('calls dispatch with the isLoading action with true value prior to the fetch call', () => {
    const thunk = getAllProvidersThunk(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          statusText: 'did not work'
      }))
    const thunk = getAllProvidersThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('did not work'))
  })

  it('should dispatch isLoading action with false value if the response comes back ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true
      }))
    const thunk = getAllProvidersThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

    it('should dispatch getAllAppointments action', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: mockProviders
      })
    }))
    const thunk = getAllProvidersThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(getProviders(mockProviders))
  })

})