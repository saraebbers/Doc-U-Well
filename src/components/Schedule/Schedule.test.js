import React from 'react';
import Schedule from './Schedule';
import { shallow } from 'enzyme';

describe('Schedule Component', () => {
  let mockprofile
  let mockinsurance
  let mockproviders
  let mockappointments

  beforeEach(() => {
    mockprofile = 'profile'
    mockinsurance = 'insurance'
    mockproviders = 'providers'
    mockappointments = 'appointments'
  })

  it('should match the screenshot if this.props.type is profile', () => {
    const wrapper = shallow(<Schedule type={mockprofile}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the screenshot if this.props.type is insurance', () => {
    const wrapper = shallow(<Schedule type={mockinsurance}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the screenshot if this.props.type is providers', () => {
    const wrapper = shallow(<Schedule type={mockproviders}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the screenshot if this.props.type is appointments', () => {
    const wrapper = shallow(<Schedule type={mockappointments}/>)
    expect(wrapper).toMatchSnapshot()
  })

})
