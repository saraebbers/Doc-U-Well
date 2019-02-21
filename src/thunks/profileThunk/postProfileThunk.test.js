import { isLoading, hasErrored, addProfile } from '../../actions/index';
import { addProfileThunk } from './postProfileThunk.js';

describe('addProfileThunk', () => {
  let mockUrl
  let mockDispatch
  let mockProfile
  let mockUser

  beforeEach(() => {
    mockUrl = 'https://my-health-tracker.herokuapp.com/api/v1/profile'
    mockDispatch = jest.fn()
    mockProfile = {blood: 'A+', height: '5,7', weight: '170', bps: '120', bpd: '80', hr: '60' }
    mockUser={id: 1, attributes: {
      api_key: '123'
    }}
  })

  it('calls dispatch with the isLoading action with true value prior to the fetch call', () => {
    const thunk = addProfileThunk(mockUrl, mockUser)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          statusText: 'did not work'
      }))
    const thunk = addProfileThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('did not work'))
  })

  it('should dispatch isLoading action with false value if the response comes back ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true
      }))
    const thunk = addProfileThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

    it('should dispatch addProfile action', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: mockProfile
      })
    }))
    const thunk = addProfileThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(addProfile(mockProfile))
  })

})
