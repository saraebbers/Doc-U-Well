import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';

class Display extends Component {

  returnJsx (btnName, information) {
    return (
      <div className='display-container'>
        <button className='add-btn'> { btnName } <i className="far fa-plus-square"></i></button>
        <div className='card-area'> { information } </div>
      </div>
    )
  }

  render() {
    let url
    let btnName
    let information

    switch (this.props.type) {
      case 'profile' : 
        url = 'url to get profile'
        // this.props.fetchProfile(url)
        btnName = 'Update Profile'
        information = 'render Profile info on Card component, assign a key'
        return this.returnJsx(btnName, information)

      case 'appointments' : 
        url = 'url for get all appointments'
        // this.props.fetchAppointments(url)
        btnName = 'Add Appointment'
        information = 'map over Appointment and return Card component, spread in return info and assign a key'
        return this.returnJsx(btnName, information)

      case 'providers' : 
        url = 'url for get all providers'
        // this.props.fetchProviders(url)
        btnName = 'Add Provider'
        information = 'map over providers and return Card component, spread in return info and assign a key'
        return this.returnJsx(btnName, information)

      case 'insurance' : 
        url = 'url for get all insurance'
        // this.props.fetchInsurance(url)
        btnName = 'Add Insurance'
        information = 'map over insurance and return Card component, spread in return info and assign a key'
        return this.returnJsx(btnName, information)

      default:
        return ('should not hit default')
    }
  }
}

Display.propTypes = {
  type: PropTypes.string
}

export default Display;