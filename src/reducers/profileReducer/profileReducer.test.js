import { profileReducer } from './profileReducer.js'

describe('profileReducer', () => {
  it('should return the current state if the action.type does not match', () => {
    const action = {type: 'SOMETHING_ELSE', profileDetails: {}}
    const state = []
    const result = profileReducer(undefined, action)
    const expected = state
    expect(result).toEqual(expected)
  })
})