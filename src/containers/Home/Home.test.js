import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

describe('Home Container', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).toMatchSnapshot()

  })
})
