import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Component', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()

  })
})
