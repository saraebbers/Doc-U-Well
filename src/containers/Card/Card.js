import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Card extends Component {

  render() {

    switch (this.props.type) {
      case 'profile' :
        const { blood, height, weight, bps, bpd, hr } = this.props
        return(
          <div className='card-container'>
            <i className="fas fa-edit"></i>
            <h3>General Information</h3>
            <p>Blood type: { blood } </p>
            <p>Height: { height } </p>
            <p>Weight: { weight } lbs</p>
            <p>BloodPressure: { bps } / { bpd } </p>
            <p>Heart Rate: { hr } bpm</p>
            <p>Last Updated: can we get this?</p>
          </div>
        )
      case 'appointments' :
        const { datetime, profile_id, provider_id} = this.props.attributes
        let currentProvider = this.props.providers.find(provider => {
          return provider.id == provider_id
        })
        const date = new Date(datetime).toString()

        return(
          <div className='card-container'>
            <i className="fas fa-trash-alt"></i>
            <i className="fas fa-edit"></i>
            <h3>Appointment Information</h3>
            <p> Your next appointment is on: {date}</p>
            <p>With: { currentProvider.attributes.given_name } { currentProvider.attributes.surname }</p>
            <p>At: { currentProvider.attributes.street_address } { currentProvider.attributes.city } { currentProvider.attributes.state } { currentProvider.attributes.zip }</p>
            <p> To contact provider call: { currentProvider.attributes.phone } </p>

          </div>
        )
      case 'providers' :
        const { given_name, surname, street_address, city, state, zip, phone  } = this.props.attributes
        return(
            <div className='card-container'>
            <i className="fas fa-trash-alt"></i>
            <i className="fas fa-edit"></i>
            <h3>Provider Information</h3>
            <p>{ given_name } { surname }</p>
            <p>{ street_address } { city } { state } { zip }</p>
            <p>{ phone } </p>
          </div>

        )
      case 'insurance' :
        const { card, image } = this.props
        return(
          <div className='card-container'>
            <i className="fas fa-trash-alt"></i>
            <h3>Insurance Card</h3>
            <p>{ card } </p>
            <div className='image-holder'> {image} </div>
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