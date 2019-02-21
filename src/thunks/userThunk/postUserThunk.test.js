import { isLoading, hasErrored, loginUser } from '../../actions/index';
import { postUserThunk } from './postUserThunk.js';

describe('postUserThunk', () => {
  let mockUrl
  let mockDispatch
  let mockUser
  let mockOptionsObj

  beforeEach(() => {
    mockUrl = 'https://my-health-tracker.herokuapp.com/api/v1/users'
    mockDispatch = jest.fn()
    mockUser = {email: 'bob@email.com', password: '1234'}
    mockOptionsObj = {
        method: 'POST',
        body: JSON.stringify(mockUser),
        headers: {
          'content-type': 'application/json'
        }
      }
  })

  it('calls dispatch with the isLoading action with true value prior to the fetch call', () => {
    const thunk = postUserThunk(mockUrl, mockUser)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          statusText: 'did not work'
      }))
    const thunk = postUserThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('did not work'))
  })

  it('should dispatch isLoading action with false value if the response comes back ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true
      }))
    const thunk = postUserThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

    it('should dispatch loginUser action', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: mockUser
      })
    }))
    const thunk = postUserThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(loginUser(mockUser))
  })

})
