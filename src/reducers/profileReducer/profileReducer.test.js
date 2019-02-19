import { profileReducer } from './profileReducer.js'

describe('profileReducer', () => {
  it('should return the current state if the action.type does not match', () => {
    const action = {type: 'SOMETHING_ELSE', profileDetails: {}}
    const state = []
    const result = profileReducer(undefined, action)
    const expected = state
    expect(result).toEqual(expected)
  })

  it('should return the new state value of profile if the action.type matches ADD_PROFILE', () =>{
    const profileDetails = {
      height: '69',
      weight: '150',
    }
    const state = [{
      given_name: 'Angela',
      heart_rate: '120',
    }]
    const result = profileReducer(state, {type: 'ADD_PROFILE', profileDetails})
    expect(result).toEqual([...state, profileDetails])
  })
})
