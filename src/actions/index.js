export const hasErrored = (errorMessage) => ({
  type: 'HAS_ERRORED',
  errorMessage
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const addAppointment = (appontmentDetails) => ({
  type: 'ADD_APPOINTMENT',
  appontmentDetails
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
  type: 'ADD_Profile',
  profileDetails
})