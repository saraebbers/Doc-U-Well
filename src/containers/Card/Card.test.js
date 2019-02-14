import React from 'react';
import Schedule from './Card';
import { shallow } from 'enzyme';

describe('Card Component', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper).toMatchSnapshot()

  })
})
