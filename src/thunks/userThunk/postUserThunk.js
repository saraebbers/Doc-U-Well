import { isLoading, hasErrored, loginUser } from '../../actions/index'


export const postUserThunk = (url, newUser) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'content-type': 'application/json'
        }
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const userDetails = await response.json()
      dispatch(loginUser(userDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
