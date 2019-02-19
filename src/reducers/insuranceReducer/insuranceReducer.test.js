import { insuranceReducer } from './insuranceReducer.js'

describe('insuranceReducer', () => {
  it('should return the current state if the action.type does not match', () => {
    const action = {type: 'SOMETHING_ELSE', insuranceDetails: {}}
    const state = []
    const result = insuranceReducer(undefined, action)
    const expected = state
    expect(result).toEqual(expected)
  })

  it('should return the new state value of insurance if the action.type matches ADD_INSURANCE', () =>{
    const insuranceDetails = {
      insurance_type: 'medical',
      carrier: 'Aetna',
    }
    const state = [{
      insurance_type: 'vision',
      carrier: 'Aetna',
    }]
    const result = insuranceReducer(state, {type: 'ADD_INSURANCE', insuranceDetails})
    expect(result).toEqual([...state, insuranceDetails])
  })
})
