import React from 'react';
import Schedule from './Home';
import { shallow } from 'enzyme';

describe('Home Component', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).toMatchSnapshot()

  })
})
