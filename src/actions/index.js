export const hasErrored = (errorMessage) => ({
  type: 'HAS_ERRORED',
  errorMessage
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})