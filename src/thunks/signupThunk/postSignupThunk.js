import { isLoading, hasErrored, postUser } from '../../actions/index'
import { apiKey } from '../../utils/apiKey';


export const postSignupThunk = (url, newUser) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'content-type': 'applcation/json'
        }
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const userDetails = await response.json()
      dispatch(postUser(userDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
