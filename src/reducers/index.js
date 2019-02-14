import { combineReducers } from 'redux'
import { appointmentReducer } from './appointmentReducer/appointmentReducer'
import { errorReducer } from './errorReducer/errorReducer'

const rootReducer = combineReducers({
  appointmentReducer,
  errorMessage: errorReducer,
})

export default rootReducer
