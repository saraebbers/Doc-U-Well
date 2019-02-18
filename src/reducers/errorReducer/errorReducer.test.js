import { errorReducer } from './errorReducer.js'

describe('errorReducer', () => {
  it('should return the current state if the action.type does not match', () => {
    const action = {type: 'SOMETHING_ELSE', errorMessage: ''}
    const state = ''
    const result = errorReducer(undefined, action)
    const expected = state
    expect(result).toEqual(expected)
  })

  it('should return the errorMessage if the action.type matches HAS_ERRORED', () => {
    const state = ''
    const result = errorReducer(state, {type: 'HAS_ERRORED', errorMessage: 'This is an Error Message'})
    expect(result).toEqual('This is an Error Message')
  })

})
