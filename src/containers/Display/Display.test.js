import React from 'react';
import Schedule from './Display';
import { shallow } from 'enzyme';

describe('Display Component', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<Display />)
    expect(wrapper).toMatchSnapshot()

  })
})
