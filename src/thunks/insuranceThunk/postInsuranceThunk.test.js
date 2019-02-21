import { isLoading, hasErrored, addInsurance } from '../../actions/index';
import { addInsuranceThunk } from './postInsuranceThunk.js';

describe('addInsuranceThunk', () => {
  let mockUrl
  let mockDispatch
  let mockInsurance
  let mockUser

  beforeEach(() => {
    mockUrl = 'https://my-health-tracker.herokuapp.com/api/v1/insurance'
    mockDispatch = jest.fn()
    mockInsurance = [{card: 'Doctor', image: ':-)'}, {card: 'Dentist', image: ':-0'}]
    mockUser={id: 1, attributes: {
      api_key: '123'
    }}
  })

  it('calls dispatch with the isLoading action with true value prior to the fetch call', () => {
    const thunk = addInsuranceThunk(mockUrl, mockUser)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          statusText: 'did not work'
      }))
    const thunk = addInsuranceThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('did not work'))
  })

  it('should dispatch isLoading action with false value if the response comes back ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true
      }))
    const thunk = addInsuranceThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

    it('should dispatch addInsurance action', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: mockInsurance
      })
    }))
    const thunk = addInsuranceThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(addInsurance(mockInsurance))
  })

})
