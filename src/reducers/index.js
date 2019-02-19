import { combineReducers } from 'redux'
import { appointmentReducer } from './appointmentReducer/appointmentReducer'
import { profileReducer } from './profileReducer/profileReducer'
import { providersReducer } from './providersReducer/providersReducer'
import { insuranceReducer } from './insuranceReducer/insuranceReducer'
import { isLoadingReducer } from './isLoadingReducer/isLoadingReducer'
import { errorReducer } from './errorReducer/errorReducer'
import { userReducer } from './userReducer/userReducer'



const rootReducer = combineReducers({
  appointments: appointmentReducer,
  profile: profileReducer,
  providers: providersReducer,
  insurance: insuranceReducer,
  isLoading: isLoadingReducer,
  errorMessage: errorReducer,
  user: userReducer,
})

export default rootReducer
