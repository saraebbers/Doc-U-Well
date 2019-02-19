export const hasErrored = (errorMessage) => ({
  type: 'HAS_ERRORED',
  errorMessage
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const addAppointment = (appointmentDetails) => ({
  type: 'ADD_APPOINTMENT',
  appointmentDetails
})

export const getAppointments = (appointmentDetails) => ({
  type: 'GET_APPOINTMENTS',
  appointmentDetails
})

export const addProvider = (providerDetails) => ({
  type: 'ADD_PROVIDER',
  providerDetails
})

export const getProviders = (providerDetails) => ({
  type: 'GET_PROVIDERS',
  providerDetails
})

export const addInsurance = (insuranceDetails) => ({
  type: 'ADD_INSURANCE',
  insuranceDetails
})

export const getInsurance = (insuranceDetails) => ({
  type: 'GET_INSURANCE',
  insuranceDetails
})

export const addProfile = (profileDetails) => ({
  type: 'ADD_PROFILE',
  profileDetails
})

export const getProfile = (profileDetails) => ({
  type: 'GET_PROFILE',
  profileDetails
})

export const loginUser = (userDetails) => ({
  type: 'LOGIN_USER',
  userDetails
})

export const logoutUser = (userDetails) => ({
  type: 'LOGOUT_USER',
  userDetails
})
