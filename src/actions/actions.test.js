import * as actions from './index';

describe('actions', () => {
  it.skip('___ should take in the payload and return an object with a type of ___', () => {

  })

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

})