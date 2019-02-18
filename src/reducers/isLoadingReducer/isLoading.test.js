import { isLoadingReducer } from './isLoadingReducer';

describe('isLoadingReducer', () => {
  it('should return state if the action.type does not match', () => {
    const state = false
    const result = isLoadingReducer(undefined, {type: 'SOMETHING_NOT_RELATED', isLoading: true})
    expect(result).toEqual(state)
  })

  it('should return the new boolean value of isLoading if the action.type matches HAS_ERRORED', () => {
    const state = false
    const result = isLoadingReducer(state, {type: 'IS_LOADING', isLoading: true})
    expect(result).toEqual(true)
  })
})