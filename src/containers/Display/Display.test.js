import React from 'react';
import Display from './Display';
import { shallow } from 'enzyme';

describe('Display Container', () => {
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

  it('should match the screenshot if this.props.type is profile and no length of prop passed and toggle form is false', () => {
    const wrapper = shallow(<Display type={mockprofile}/>)
    wrapper.setState({toggleForm: false})
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the screenshot if this.props.type is insurance and no length of prop passedand toggle form is false', () => {
    const wrapper = shallow(<Display type={mockinsurance}/>)
    wrapper.setState({toggleForm: false})
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the screenshot if this.props.type is providers and no length of prop passed and toggle form is false', () => {
    const wrapper = shallow(<Display type={mockproviders}/>)
    wrapper.setState({toggleForm: false})
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the screenshot if this.props.type is appointments and no length of prop passedand toggle form is false', () => {
    const wrapper = shallow(<Display type={mockappointments}/>)
    wrapper.setState({toggleForm: false})
    expect(wrapper).toMatchSnapshot()
  })

    it('should match the screenshot if this.props.type is profile and no length of prop passed and toggle form is true', () => {
    const wrapper = shallow(<Display type={mockprofile}/>)
    wrapper.setState({toggleForm: true})
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the screenshot if this.props.type is insurance and no length of prop passedand toggle form is true', () => {
    const wrapper = shallow(<Display type={mockinsurance}/>)
    wrapper.setState({toggleForm: true})
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the screenshot if this.props.type is providers and no length of prop passed and toggle form is true', () => {
    const wrapper = shallow(<Display type={mockproviders}/>)
    wrapper.setState({toggleForm: true})
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the screenshot if this.props.type is appointments and no length of prop passedand toggle form is true', () => {
    const wrapper = shallow(<Display type={mockappointments}/>)
    wrapper.setState({toggleForm: true})
    expect(wrapper).toMatchSnapshot()
  })

  // it('state should toggle when showForm function is called', () => {
  //   const wrapper = shallow(<Display type={mockappointments}/>)
  //   wrapper.setState({toggleForm: true})
  //   wrapper.find('.add-btn').simulate('click')
  //   expect(wrapper.state('toggleForm')).toBe(false)
  // })


})
