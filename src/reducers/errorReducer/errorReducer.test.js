import { errorReducer } from './errorReducer.js'

describe('errorReducer', () => {
  it('should return the current state if the action.type does not match', () => {
    const action = {type: 'SOMETHING_ELSE', errorMessage: ''}
    const state = []
    const result = errorReducer(undefined, action)
    const expected = state
    expect(result).toEqual(expected)
  })
  
})