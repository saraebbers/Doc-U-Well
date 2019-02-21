import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Card extends Component {

  render() {

    switch (this.props.type) {
      case 'profile' :
        const { dob, height, weight, bp_systolic, bp_diastolic, heart_rate, blood_type } = this.props.attributes
        const { id } = this.props
        let currentProfile = this.props.profile.find(file => {
          return file.id == id
        })
        const profileName = `${currentProfile.attributes.given_name} ${currentProfile.attributes.surname}`.toUpperCase()
        const dobOptions = {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }
        const birthDate = new Date(dob).toLocaleString('en-US', dobOptions)

        return(
          <div className='card-container'>
            <h3> { profileName }</h3>
            <h4> DOB: { birthDate }</h4>
            <p>Blood type: { blood_type } </p>
            <p>Height: { height } inches </p>
            <p>Weight: { weight } lbs</p>
            <p>Blood Pressure: { bp_systolic } / { bp_diastolic } </p>
            <p>Heart Rate: { heart_rate } bpm</p>
          </div>
        )
      case 'appointments' :
        const { datetime, provider_id, notes} = this.props.attributes
        let currentProvider = this.props.providers.find(provider => {
          return provider.id == provider_id
        })
        const options = {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          year: 'numeric',
        }
        const date = new Date(datetime * 1000).toLocaleString('en-US', options);
        const providerName = `${ currentProvider.attributes.given_name } ${ currentProvider.attributes.surname }`.toUpperCase()

        return(
          <div className='card-container'>
            <i className="fas fa-trash-alt"></i>
            <h3> APPOINTMENT WITH</h3>
            <h3> {providerName} </h3>
            <h4> {date} </h4>
            <p> { currentProvider.attributes.street_address } { currentProvider.attributes.city } { currentProvider.attributes.state } { currentProvider.attributes.zip }</p>
            <p> { currentProvider.attributes.phone } </p>
            <p> { notes } </p>

          </div>
        )
      case 'providers' :
        const { specialty, given_name, surname, street_address, city, state, zip, phone  } = this.props.attributes
        const specialtyType = specialty.toUpperCase()
        
        return(
            <div className='card-container'>
            <h3> {specialtyType} PROVIDER </h3>
            <i className="fas fa-trash-alt"></i>
            <h4> { given_name } { surname }</h4>
            <p>{ street_address } { city } { state } { zip }</p>
            <p>{ phone } </p>
          </div>
        )
      case 'insurance' :
        const { insurance_type, carrier, id_number, group_number, phone_number } = this.props.attributes
        let insuranceType

        if(insurance_type) {
          insuranceType = insurance_type.toUpperCase()
        } else {
          insuranceType = 'not entered'
        }
        return(
          <div className='card-container'>
            <i className="fas fa-trash-alt"></i>
            <h3> { insuranceType } CARD</h3>
            <h4> { carrier } Policy Number: { id_number } </h4>
            <p> Group: { group_number } </p>
            <p> { carrier } Phone Number: { phone_number } </p>
          </div>
        )
      case 'other' :
        const { message } = this.props
        return (
          <div className='card-container'>
            <p> { message} </p>
          </div>
          )
      default:
        return ('hit card default')
    }
  }
}

Card.propTypes = {
  name: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    appointments: state.appointments,
    providers: state.providers,
    insurance: state.insurance,
    profile: state.profile,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    }
}

export default connect(mapStateToProps)(Card);
