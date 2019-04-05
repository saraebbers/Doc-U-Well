import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card'
import Schedule from '../../components/Schedule/Schedule'
import { connect } from 'react-redux';
import { getAllAppointmentsThunk } from '../../thunks/appointmentThunk/getAppointmentsThunk'
import { getAllProvidersThunk } from '../../thunks/providerThunk/getProvidersThunk'
import { getAllInsuranceThunk } from '../../thunks/insuranceThunk/getInsuranceThunk'
import { getProfileThunk } from '../../thunks/profileThunk/getProfileThunk'

export class Display extends Component {
  constructor() {
    super()
    this.state = {
      toggleForm: false
    }
  }

  showForm () {
    this.setState({toggleForm: !this.state.toggleForm})
  }

  componentDidMount() {
    const { getAllProviders, getAllAppointments, getProfile, getAllInsurance, providers, insurance, profile, appointments, user } = this.props
    if (!providers.length){
      getAllProviders('https://my-health-tracker.herokuapp.com/api/v1/providers')
    }
    if (!appointments.length && user.id){
      getAllAppointments('https://my-health-tracker.herokuapp.com/api/v1/appointments', user)
    } 
    if (!profile.length && user.id){
      getProfile('https://my-health-tracker.herokuapp.com/api/v1/profiles', user)
    }
    if (!insurance.length && user.id){
      getAllInsurance('https://my-health-tracker.herokuapp.com/api/v1/insurances', user)
    }
  }

  returnJsx (btnName, responseArray) {
    let info
    if(responseArray.length){
      info = responseArray.map(arrayItem => {
        return <Card {...arrayItem} type={this.props.type} key={arrayItem.type+arrayItem.id}/>
      })
    } else if (!this.props.user.id) {
      let loginResponses = [{message: 'Please log-in to view and save personalized information'}]
      info =  loginResponses.map(lresponse => {
        return <Card {...lresponse} type='other' key='1'/>
      })
    } else if (this.props.user.id && !responseArray.length) {
      let noSavedResponses = [{message: 'You do not have any saved information'}]
      info =  noSavedResponses.map(nsresponse => {
        return <Card {...nsresponse} type='other' key='2'/>
      })
    }

    if(this.state.toggleForm) {
      return (
        <div className='display-container'>
          <button onClick={() => this.showForm()} className='add-btn'> Close Form <i className="far fa-plus-square"></i></button>
          <Schedule type={this.props.type}/>
          <div className='card-area'> { info } </div>
        </div>
      )
    } else {
      return(
        <div className='display-container'>
          <button onClick={() => this.showForm()} className='add-btn'> { btnName } <i className="far fa-plus-square"></i></button>
          <div className='card-area'> { info } </div>
        </div>
      )
    }
  }

  render () {
    let btnName
    let responseArray
    const { type, providers, appointments, profile, insurance} = this.props

    switch (type) {
      case 'profile' :
        btnName = 'Add Profile'
        responseArray = profile
        return this.returnJsx(btnName, responseArray)

      case 'appointments' :
        btnName = 'Add Appointment'
        responseArray = appointments
        return this.returnJsx(btnName, responseArray)

      case 'providers' :
        btnName = 'Add Provider'
        responseArray = providers
        return this.returnJsx(btnName, responseArray)

      case 'insurance' :
        btnName = 'Add Insurance'
        responseArray = insurance
        return this.returnJsx(btnName, responseArray)

      default:
        return ('hit display default')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    appointments: state.appointments,
    providers: state.providers,
    insurance: state.insurance,
    profile: state.profile,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    user: state.user,
    }
}

export const mapDispatchToProps = (dispatch) => ({
  getAllAppointments: (url, user) => dispatch(getAllAppointmentsThunk(url, user)),
  getAllProviders: (url) => dispatch(getAllProvidersThunk(url)),
  getAllInsurance: (url, user) => dispatch(getAllInsuranceThunk(url, user)),
  getProfile: (url, user) => dispatch(getProfileThunk(url, user)),
})

Display.propTypes = {
  type: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
