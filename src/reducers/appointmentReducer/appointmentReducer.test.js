import { appointmentReducer } from './appointmentReducer.js'

describe('appointmentReducer', () => {
  it('should return the current state if the action.type does not match', () => {
    const action = {type: 'SOMETHING_ELSE', appointmentDetails: {}}
    const state = []
    const result = appointmentReducer(undefined, action)
    const expected = state
    expect(result).toEqual(expected)
  })

  it('should return the new state value of appointments if the action.type matches ADD_APPOINTMENT', () =>{
    const appointmentDetails = {
      date: '12-3-19',
      time: '3pm',
    }
    const state = [{
      date: '1-2-19',
      time: '4pm',
    }]
    const result = appointmentReducer(state, {type: 'ADD_APPOINTMENT', appointmentDetails})
    expect(result).toEqual([...state, appointmentDetails])
  })
})
