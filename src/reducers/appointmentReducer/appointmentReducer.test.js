import { appointmentReducer } from './appointmentReducer.js'

describe('appointmentReducer', () => {
  it('should return the current state if the action.type does not match', () => {
    const action = {type: 'SOMETHING_ELSE', appointmentDetails: {}}
    const state = []
    const result = appointmentReducer(undefined, action)
    const expected = state
    expect(result).toEqual(expected)
  })
})