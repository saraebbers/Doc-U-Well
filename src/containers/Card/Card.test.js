import React from 'react';
import { Card, mapStateToProps } from './Card';
import { shallow } from 'enzyme';

describe('Card Container', () => {
  let mockprofile
  let mockappointments
  let mockproviders
  let mockinsurance
  let mockother
  let mockattributes
  let mockmessage
  let mockCurrentProvider
  let mockprovider
  let mockprofile123

beforeEach(()=> {

  mockprofile = "profile"
  mockappointments = "appointments"
  mockproviders = "providers"
  mockinsurance = "insurance"
  mockother = "other"
  mockattributes = { speciality: 'dental', given_name: 'Bob', surname: 'Smith', street_address: '123', city: 'London', state: 'ND', zip: '12345', phone: '1234567890', dob: '12121212', height: '65', weight: '123', bp_systolic: '120', bp_diastolic: '67', heart_rate: '22', blood_type: 'A+', datetime: '12121212', provider_id: '1', notes: 'tf7yg8ouhp' }
  mockmessage = "this is a message"
  mockprofile123 = [{provider: {id: '1', attributes: {given_name: 'Sally', sirname: 'Jones'}}, attributes: {given_name: 'Robert'}}]
})

  it('should match the screenshot', () => {
      const wrapper = shallow(<Card />)
      expect(wrapper).toMatchSnapshot()
    })

  it('should render the correct information if passed providers as props', () => {
    const wrapper = shallow(<Card type={mockproviders} attributes={mockattributes}/>)
    expect(wrapper.find('.providerstype').length).toEqual(1);
  })

  it('should render the correct information if passed profile as props', () => {
    const wrapper = shallow(<Card type={mockprofile} attributes={mockattributes} profile={mockprofile123}/>)
    expect(wrapper.find('.profiletype').length).toEqual(1);
  })


  it('should render the correct information if passed insurance as props', () => {
    const wrapper = shallow(<Card type={mockinsurance} attributes={mockinsurance}/>)
    expect(wrapper.find('.insurancetype').length).toEqual(1);
  })

  it('should render the correct information if passed other as props', () => {
    const wrapper = shallow(<Card type={mockother} message={mockmessage}/>)
    expect(wrapper.find('.othertype').length).toEqual(1);
  })

})
