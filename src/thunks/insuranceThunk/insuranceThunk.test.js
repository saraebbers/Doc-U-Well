import { isLoading, hasErrored, getInsurance } from '../../actions/index';
import { getAllInsuranceThunk } from './insuranceThunk.js';

describe('getAllInsuranceThunk', () => {
  let mockUrl
  let mockDispatch
  let mockInsurance

  beforeEach(() => {
    mockUrl = 'https://my-health-tracker.herokuapp.com/api/v1/insurance'
    mockDispatch = jest.fn()
    mockInsurance = [{card: 'Doctor', image: ':-)'}, {card: 'Dentist', image: ':-0'}]
  })

  it('calls dispatch with the isLoading action with true value prior to the fetch call', () => {
    const thunk = getAllInsuranceThunk(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          statusText: 'did not work'
      }))
    const thunk = getAllInsuranceThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('did not work'))
  })

  it('should dispatch isLoading action with false value if the response comes back ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true
      }))
    const thunk = getAllInsuranceThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

    it('should dispatch getAllInsurance action', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: mockInsurance
      })
    }))
    const thunk = getAllInsuranceThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(getInsurance(mockInsurance))
  })

})
