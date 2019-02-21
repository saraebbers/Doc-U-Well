import { providersReducer } from './providersReducer.js'

describe('providersReducer', () => {
  it('should return the current state if the action.type does not match', () => {
    const action = {type: 'SOMETHING_ELSE', providersDetails: {}}
    const state = []
    const result = providersReducer(undefined, action)
    const expected = state
    expect(result).toEqual(expected)
  })

  it('should return the new state value of providers if the action.type matches ADD_PROVIDER', () =>{
    const providerDetails = {
      city: 'Hollywood',
      zip: '12345',
    }
    const state = [{
      city: 'Santa Monica',
      zip: '12121',
    }]
    const result = providersReducer(state, {type: 'ADD_PROVIDER', providerDetails})
    expect(result).toEqual([...state, providerDetails])
  })

  it('should return the new state value of providers if the action.type matches GET_PROVIDERS', () =>{
    const providerDetails = [{
      city: 'Hollywood',
      zip: '12345',
    }]
    const state = [{
      city: 'Santa Monica',
      zip: '12121',
    }]
    const result = providersReducer(state, {type: 'GET_PROVIDERS', providerDetails})
    expect(result).toEqual([...state, ...providerDetails])
  })

})
