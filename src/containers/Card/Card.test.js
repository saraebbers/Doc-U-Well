import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card Container', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper).toMatchSnapshot()

  })
})
