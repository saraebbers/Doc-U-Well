import { combineReducers } from 'redux'
import { appointmentReducer } from './appointmentReducer/appointmentReducer'
import { errorReducer } from './errorReducer/errorReducer'

const rootReducer = combineReducers({
  appointments: appointmentReducer,
  profile: profileReducer,
  providers: providersReducer,
  insurance: insuranceReducer,
  isLoading: isLoadingReducer,
  errorMessage: errorReducer,
})

export default rootReducer
