import { isLoading, hasErrored, loginUser } from '../../actions/index';
import { getUserThunk } from './getUserThunk.js';

describe('getUserThunk', () => {
  let mockUrl
  let mockDispatch
  let mockUser

  beforeEach(() => {
    mockUrl = 'https://my-health-tracker.herokuapp.com/api/v1/users'
    mockDispatch = jest.fn()
    mockUser = {email: 'bob@email.com', password: '1234'}
  })

  it('calls dispatch with the isLoading action with true value prior to the fetch call', () => {
    const thunk = getUserThunk(mockUrl, mockUser)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          statusText: 'did not work'
      }))
    const thunk = getUserThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('did not work'))
  })

  it('should dispatch isLoading action with false value if the response comes back ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true
      }))
    const thunk = getUserThunk(mockUrl, mockUser)
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
    const thunk = getUserThunk(mockUrl, mockUser)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(loginUser(mockUser))
  })

})
