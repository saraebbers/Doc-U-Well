import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addAppointmentThunk } from '../../thunks/appointmentThunk/postAppointmentThunk'
import { addProviderThunk } from '../../thunks/providerThunk/postProviderThunk'
import { addInsuranceThunk } from '../../thunks/insuranceThunk/postInsuranceThunk'
import { addProfileThunk } from '../../thunks/profileThunk/postProfileThunk'


class Schedule extends Component {
  constructor() {
    super()
    this.state = {
      startDate: new Date(),
      userFirst: '',
      userLast: '',
      dob: '',
      blood: '',
      height: '',
      weight:'',
      bps: '',
      bpd: '',
      hr: '',
      date: '',
      time: '',
      ap: '',
      type: '',
      kind: '',
      provider: '',
      providerFirst: '',
      providerLast: '',
      phone: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      kind: '',
      specialty: '',
      insuranceType: '',
      polNum: '',
      insurancePhone: '',
      groupNumber: '',
      notes: '',
      carrier: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeSelect(event) {
    this.setState({insuranceType: event.target.value})
  }

  handleSubmit() {
    const { user, type, handleProfileSubmit, handleAppointmentSubmit, handleProviderSubmit, handleInsuranceSubmit } = this.props
    const { userFirst, userLast, dob, blood, height, weight, bps, bpd, hr, startDate, ap, provider, providerFirst, providerLast, phone, streetAddress, city, state, zip, kind, specialty, insuranceType, polNum, insurancePhone, groupNumber, carrier, notes } = this.state
    let payload
    
    switch (type) {
      case 'profile' :
        payload = {userFirst, userLast, dob, blood, height, weight, bps, bpd, hr, provider}
        handleProfileSubmit(user, payload)
        this.setState({userFirst: '', userLast: '', dob: '',  blood: '', height: '', weight: '', bps: '', bpd: '', hr: '', provider: '' })
        break
      case 'appointments' :
        payload = {
          datetime: this.state.startDate,
          // provider_id: this.state.provider
        }
        handleAppointmentSubmit(user, payload)
        this.setState({startDate: new Date(), kind: '', provider: '', notes: ''})
        break
      case 'providers' :
        payload = {providerFirst, providerLast, phone, streetAddress, city, state, zip, specialty}
        handleProviderSubmit(user, payload)
        this.setState({providerFirst: '', providerLast: '', phone: '', streetAddress: '', city: '', state: '', zip: '', specialty: ''})
        break
      case 'insurance' :
        payload = {
          insurance_type: insuranceType,
          carrier: carrier,
          id_number: polNum,
          group_number: groupNumber,
          phone_number: insurancePhone,
          profile_id: user.id,
          api_key: user.attributes.api_key,
        }
        handleInsuranceSubmit(user, payload)
        this.setState({carrier: '', insuranceType: '', polNum: '', groupNumber: '', insurancePhone: ''})
        break
      default:
        return ('hit handleSubmit default')
    }
    // add submitted info to redux / make fetch for post of new data
    // close form
  }

  informationSubmission(formData) {
    return (
      <section className='form-container'>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.handleSubmit()}}>
          <div>
            <h4 className='form-title'>Enter Your Information Below:</h4>
            <div className='input-area'>{ formData } </div>
          </div>
          <button className='form-btn'>Submit</button>
        </form>
      </section>
    )
  }

  render() {
    let formData

    const { userFirst, userLast, dob, blood, height, weight, bps, bpd, hr, startDate, ap, type, provider, providerFirst, providerLast, phone, streetAddress, city, state, zip, kind, specialty, insuranceType, polNum, insurancePhone, groupNumber, carrier, notes } = this.state

    switch (this.props.type) {
      case 'profile' :
        formData = (
          <div className='form-info'>
            First Name: <input placeholder='First Name' value={userFirst} onChange={(event) => this.setState({userFirst: event.target.value})}/>
            <br/>
            Last Name: <input placeholder='Last Name' value={userLast} onChange={(event) => this.setState({userLast: event.target.value})}/>
            <br/>
            DOB: <input placeholder='DOB' value={dob} onChange={(event) => this.setState({dob: event.target.value})}/>
            <br/>
            Height: <input placeholder='Height' value={height} onChange={(event) => this.setState({height: event.target.value})}/>
            <br/>
            Weight: <input placeholder='Weight' value={weight} onChange={(event) => this.setState({weight: event.target.value})}/>
            <br/>
            Blood Pressure: <input placeholder='Systolic' value={bps} size='10' onChange={(event) => this.setState({bps: event.target.value})}/> / <input placeholder='Diastolic' value={bpd} size='10' onChange={(event) => this.setState({bpd: event.target.value})}/>
            <br/>
            Heart Rate: <input placeholder='Heart Rate' value={hr} onChange={(event) => this.setState({hr: event.target.value})}/>
            <br/>
            Blood Type: <input placeholder='Blood Type' value={blood} onChange={(event) => this.setState({blood: event.target.value})}/>
            <br/>
            Primary Provider: <input placeholder='Provider' value={provider} onChange={(event) => this.setState({provider: event.target.value})}/>
            <br/>
          </div>
        )
        return this.informationSubmission(formData)
      case 'appointments' :
        formData = (
          <div className='form-info'>
            Date: <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            dateFormat='Pp'
            />
            <br/>
            Type of Appointment: <input placeholder='Type of Appointment' value={kind} onChange={(event) => this.setState({kind: event.target.value})}/>
            <br/>
            Provider: <input placeholder='Provider' value={provider} onChange={(event) => this.setState({provider: event.target.value})}/>
            <br/>
            <textarea width='100%' rows='10' cols='50' wrap placeholder='Add Appointment Notes Here' value={notes} onChange={(event) => this.setState({notes: event.target.value})}/>
          </div>
        )
        return this.informationSubmission(formData)
      case 'providers' :
        formData = (
          <div className='form-info'>
            Provider First Name: <input placeholder='Provider First Name' value={providerFirst} onChange={(event) => this.setState({providerFirst: event.target.value})}/>
            <br/>
            Provider Last Name: <input placeholder='Provider Last Name' value={providerLast} onChange={(event) => this.setState({providerLast: event.target.value})}/>
            <br/>
            Phone Number: <input placeholder='Phone Number' value={phone} onChange={(event) => this.setState({phone: event.target.value})}/>
            <br/>
            Street Address: <input placeholder='Street Address' value={streetAddress} onChange={(event) => this.setState({streetAddress: event.target.value})}/>
            <br/>
            City: <input placeholder='City' value={city} onChange={(event) => this.setState({city: event.target.value})}/>
            <br/>
            State: <input placeholder='State' value={state} onChange={(event) => this.setState({state: event.target.value})}/>
            <br/>
            Zip: <input placeholder='Zip Code' value={zip} onChange={(event) => this.setState({zip: event.target.value})}/>
            <br/>
            Specialty: <input placeholder='Specialty' value={specialty} onChange={(event) => this.setState({specialty: event.target.value})}/>
          </div>
        )
        return this.informationSubmission(formData)
      case 'insurance' :
            // Insurance Type: <input placeholder='Insurance Type' value={insuranceType} onChange={(event) => this.setState({insuranceType: event.target.value})}/>
        formData = (
          <div className='form-info'>
            Insurance Carrier: <input placeholder='Insurance Carrier' value={carrier} onChange={(event) => this.setState({carrier: event.target.value})}/>
            <br/>
            <label>Insurance Type: 
              <select value={this.state.insuranceType} onChange={this.handleChangeSelect}>
                <option value="medical">Medical</option>
                <option value="dental">Dental</option>
                <option value="vision">Vision</option>
                <option value="supplemental">Supplemental</option>
              </select>
            </label>
            <br/>
            Insurance Policy Number: <input placeholder='Insurance Policy Number' value={polNum} size='22' onChange={(event) => this.setState({polNum: event.target.value})}/>
            <br/>
            Group Number: <input placeholder='Group Number' value={groupNumber} onChange={(event) => this.setState({groupNumber: event.target.value})}/>
            <br/>
            Phone: <input placeholder='Insurance Phone Number' value={insurancePhone} onChange={(event) => this.setState({insurancePhone: event.target.value})}/>
            <br/>
          </div>
        )
        return this.informationSubmission(formData)
      default:
        return ('hit schedule default')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    appointment: state.appointments,
    provider: state.providers,
    insurance: state.insurance,
    profile: state.profile,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAppointmentSubmit: ((user, payload)=> {
      dispatch(addAppointmentThunk(user, payload))
    }),
    handleProviderSubmit: ((user, payload)=> {
      dispatch(addProviderThunk(user, payload))
    }),
    handleInsuranceSubmit: ((user, payload)=> {
      dispatch(addInsuranceThunk(user, payload))
    }),
    handleProfileSubmit: ((user, payload)=> {
      dispatch(addProfileThunk(user, payload))
    }),
  }
}


Schedule.propTypes = {
  type: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
