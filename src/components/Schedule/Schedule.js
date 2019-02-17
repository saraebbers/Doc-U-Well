import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import { addAppointment } from '../../actions/index';
import { addProvider } from '../../actions/index';
import { addInsurance } from '../../actions/index';
import { addProfile } from '../../actions/index';
import { connect } from 'react-redux';

class Schedule extends Component {
  constructor() {
    super()
    this.state = {
      blood: '',
      height: '',
      weight:'',
      bps: '',
      bpd: '',
      hr: '',
      date: '',
      time: '',
      ap: '',
      kind: '',
      provider: '',
      clinic: '',
      phone: '',
      address: '',
      specialty: '',
      insuranceType: '',
      image: '',
      notes: '',
    }
  }

  handleSubmit() {
    const { type, handleProfileSubmit, handleAppointmentSubmit } = this.props
    const { blood, height, weight, bps, bpd, hr, date, time, ap, kind, provider, clinic, phone, address, specialty, insuranceType, image, notes } = this.state
    let text
    switch (type) {
      case 'profile' :
        text = {blood, height, weight, bps, bpd, hr}
        console.log(text)
        handleProfileSubmit(text)
      case 'appointments' :
        text = {date, time, kind, provider, notes}
        console.log(text)
        handleAppointmentSubmit(text)
      case 'providers' :
      case 'insurance' :
    }
    // add submitted info to redux / make fetch for post of new data
    // return all text fields back to ''
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
    const { blood, height, weight, bps, bpd, hr, date, time, ap, type, provider, clinic, phone, address, kind, specialty, insuranceType, image, notes} = this.state

    switch (this.props.type) {
      case 'profile' :
        formData = (
          <div className='form-info'>
            Height: <input placeholder='Height' value={height} onChange={(event) => this.setState({height: event.target.value})}/> 
            <br/>
            Weight: <input placeholder='Weight' value={weight} onChange={(event) => this.setState({weight: event.target.value})}/> 
            <br/>
            Blood Pressure: <input placeholder='Systolic' value={bps} onChange={(event) => this.setState({bps: event.target.value})}/> / <input placeholder='Diastolic' value={bpd} onChange={(event) => this.setState({bpd: event.target.value})}/> 
            <br/>
            Heart Rate: <input placeholder='Heart Rate' value={hr} onChange={(event) => this.setState({hr: event.target.value})}/> 
            <br/>
            Blood Type: <input placeholder='Blood Type' value={blood} onChange={(event) => this.setState({blood: event.target.value})}/> 
          </div>
        )
        return this.informationSubmission(formData)
      case 'appointments' :
        formData = (
          <div className='form-info'>
            Date: <input placeholder='Date' value={date} onChange={(event) => this.setState({date: event.target.value})}/> 
            <br/>
            Time: <input placeholder='Time' value={time} onChange={(event) => this.setState({time: event.target.value})}/> <input placeholder='am/pm' value={ap} onChange={(event) => this.setState({ap: event.target.value})}/> 
            <br/>
            Type of Appointment: <input placeholder='Type of Appointment' value={kind} onChange={(event) => this.setState({kind: event.target.value})}/> 
            <br/>
            Provider: <input placeholder='Provider' value={provider} onChange={(event) => this.setState({provider: event.target.value})}/> <br/>
            <textarea rows='10' col='6' wrap placeholder='Add Appointment Notes Here' value={notes} onChange={(event) => this.setState({notes: event.target.value})}/> 
          </div>
        )
        return this.informationSubmission(formData)
      case 'providers' :
        formData = (
          <div className='form-info'>
            <input />
          </div>
        )
      case 'insurance' :
        formData = (
          <div className='form-info'>
            <input />
          </div>
        )
      default:
        return ('hit schedule default')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    appointment: state.appointmentReducer,
    provider: state.providerReducer,
    insurance: state.insuranceReducer,
    profile: state.profileReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAppointmentSubmit: (text => {
      dispatch(addAppointment(text))
    }),
    // handleProviderSubmit: (text => {
    //   dispatch(addProvider(text))
    // }),
    // handleInsuranceSubmit: (text => {
    //   dispatch(addInsurance(text))
    // }),
    handleProfileSubmit: (text => {
      dispatch(addProfile(text))
    }),
  }
}


Schedule.propTypes = {
  type: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
