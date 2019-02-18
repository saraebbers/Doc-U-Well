import * as actions from './index';

describe('actions', () => {

  it('hasErrored should take in the payload and return an object with a type of HAS_ERRORED', () => {
    const errorMessage = ''
    const expected = {
      type: 'HAS_ERRORED',
      errorMessage
    }
    const result = actions.hasErrored(errorMessage)
    expect(result).toEqual(expected)
  })

  it('isLoading should take in the payload and return an object with a type of IS_LOADING', () => {
    const bool = true
    const expected = {
      type: 'IS_LOADING',
      isLoading: true
    }
    const result = actions.isLoading(bool)
    expect(result).toEqual(expected)
  })

  it('addAppointment should take in the payload and return an object with a type of ADD_APPOINTMENT', () => {
    const appointmentDetails = ''
    const expected = {
      type: 'ADD_APPOINTMENT',
      appointmentDetails
    }
    const result = actions.addAppointment(appointmentDetails)
    expect(result).toEqual(expected)
  })

  it('getAppointments should take in the payload and return an object with a type of GET_APPOINTMENTS', () => {
    const appointmentDetails = ''
    const expected = {
      type: 'GET_APPOINTMENTS',
      appointmentDetails
    }
    const result = actions.getAppointments(appointmentDetails)
    expect(result).toEqual(expected)
  })

  it('addProvider should take in the payload and return an object with a type of ADD_PROVIDER', () => {
    const providerDetails = ''
    const expected = {
      type: 'ADD_PROVIDER',
      providerDetails
    }
    const result = actions.addProvider(providerDetails)
    expect(result).toEqual(expected)
  })

  it('getProviders should take in the payload and return an object with a type of GET_PROVIDERS', () => {
    const providerDetails = ''
    const expected = {
      type: 'GET_PROVIDERS',
      providerDetails
    }
    const result = actions.getProviders(providerDetails)
    expect(result).toEqual(expected)
  })

  it('addInsurance should take in the payload and return an object with a type of ADD_INSURANCE', () => {
    const insuranceDetails = ''
    const expected = {
      type: 'ADD_INSURANCE',
      insuranceDetails
    }
    const result = actions.addInsurance(insuranceDetails)
    expect(result).toEqual(expected)
  })

  it('getInsurance should take in the payload and return an object with a type of GET_INSURANCE', () => {
    const insuranceDetails = ''
    const expected = {
      type: 'GET_INSURANCE',
      insuranceDetails
    }
    const result = actions.getInsurance(insuranceDetails)
    expect(result).toEqual(expected)
  })

  it('addProfile should take in the payload and return an object with a type of ADD_PROFILE', () => {
    const profileDetails = ''
    const expected = {
      type: 'ADD_PROFILE',
      profileDetails
    }
    const result = actions.addProfile(profileDetails)
    expect(result).toEqual(expected)
  })

  it('getProfile should take in the payload and return an object with a type of GET_PROFILE', () => {
    const profileDetails = ''
    const expected = {
      type: 'GET_PROFILE',
      profileDetails
    }
    const result = actions.getProfile(profileDetails)
    expect(result).toEqual(expected)
  })

})
