import { providersReducer } from './providersReducer.js'

describe('providersReducer', () => {
  it('should return the current state if the action.type does not match', () => {
    const action = {type: 'SOMETHING_ELSE', providersDetails: {}}
    const state = []
    const result = providersReducer(undefined, action)
    const expected = state
    expect(result).toEqual(expected)
  })
})