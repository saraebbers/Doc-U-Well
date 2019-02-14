import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card'

class Display extends Component {

  returnJsx (btnName, information) {
    return (
      <div className='display-container'>
        <button className='add-btn'> { btnName } <i className="far fa-plus-square"></i></button>
        <div className='card-area'> { information } </div>
      </div>
    )
  }

  render () {
    let url
    let btnName
    let information
    let name = 'Susan'

    switch (this.props.type) {
      case 'profile' : 
        url = 'url to get profile'
        // await this.props.fetchProfile(url)
        btnName = 'Update Profile'
        information = <Card name={name} key='1'/>
        return this.returnJsx(btnName, information)

      case 'appointments' : 
        url = 'url for get all appointments'
        // await this.props.fetchAppointments(url)
        btnName = 'Add Appointment'
        information = 'map over Appointment and return Card component, spread in return info and assign a key'
        return this.returnJsx(btnName, information)

      case 'providers' : 
        url = 'url for get all providers'
        // await this.props.fetchProviders(url)
        btnName = 'Add Provider'
        information = 'map over providers and return Card component, spread in return info and assign a key'
        return this.returnJsx(btnName, information)

      case 'insurance' : 
        url = 'url for get all insurance'
        // await this.props.fetchInsurance(url)
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