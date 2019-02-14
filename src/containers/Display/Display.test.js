import React from 'react';
import Display from './Display';
import { shallow } from 'enzyme';

describe('Display Container', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<Display />)
    expect(wrapper).toMatchSnapshot()

  })
})
