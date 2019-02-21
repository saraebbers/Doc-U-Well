import { isLoading, hasErrored, getProfile } from '../../actions/index'

export const getProfileThunk = (url, user) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`${url}?api_key=${user.attributes.api_key}`)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const profileDetails = await response.json()
      dispatch(getProfile(profileDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}