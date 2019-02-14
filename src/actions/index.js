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

export const addProvider = (providerDetails) => ({
  type: 'ADD_PROVIDER',
  providerDetails
})

export const addInsurance = (insuranceDetails) => ({
  type: 'ADD_INSURANCE',
  insuranceDetails
})

export const addProfile = (profileDetails) => ({
  type: 'ADD_PROFILE',
  profileDetails
})