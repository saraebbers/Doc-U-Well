import { isLoading, hasErrored, addProfile } from '../../actions/index'

export const addProfileThunk = (user, payload) => {
  console.log('pl', payload)
  console.log('user', user)

  let url = 'https://my-health-tracker.herokuapp.com/api/v1/profiles'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      if(!response.ok) {
        throw Error(response.statusText)
        console.log('error', response.statusText)
      }
      dispatch(isLoading(false))
      const profileDetails = await response.json()
      dispatch(addProfile(profileDetails.data))
    } catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}
