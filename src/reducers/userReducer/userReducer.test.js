import { userReducer } from './userReducer.js'

describe('userReducer', () => {
  it('should return the current state if the action.type does not match', () => {
    const action = {type: 'SOMETHING_ELSE', userDetails: {}}
    const state = {}
    const result = userReducer(undefined, action)
    const expected = state
    expect(result).toEqual(expected)
  })

  it('should return the new state value of user if the action.type matches LOGIN_USER', () =>{
    const userDetails = {
      email: 'bob@email.com',
      password: '12345',
    }
    const state = {
    }
    const result = userReducer(state, {type: 'LOGIN_USER', userDetails})
    expect(result).toEqual(userDetails)
  })


  it('should return the new state value of user if the action.type matches LOGOUT_USER', () =>{
    const userDetails = {
      email: 'bob@email.com',
      password: '12345',
    }
    const state = {
      email: 'maria@email.com',
      password: '12121',
    }
    const result = userReducer(state, {type: 'LOGOUT_USER', userDetails})
    expect(result).toEqual({})
  })
})
