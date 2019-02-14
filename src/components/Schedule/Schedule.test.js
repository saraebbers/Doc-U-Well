import React from 'react';
import Schedule from './Schedule';
import { shallow } from 'enzyme';

describe('Schedule Component', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<Schedule />)
    expect(wrapper).toMatchSnapshot()

  })
})
