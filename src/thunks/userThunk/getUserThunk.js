import { isLoading, hasErrored, loginUser } from '../../actions/index'


export const getUserThunk = (url, oldUser) => {
  console.log(oldUser)
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`${url}?email=${oldUser.email}&password=${oldUser.password}`)
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
