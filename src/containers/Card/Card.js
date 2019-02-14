import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';

class Card extends Component {

  render() {
    console.log(this.props)

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
        const { date, time, reason, provider, location } = this.props
        return(
          <div className='card-container'>
            <i className="fas fa-trash-alt"></i>
            <i className="fas fa-edit"></i>
            <h3>Appointment Information</h3>
            <p>{ date } </p>
            <p>{ time } </p>
            <p>{ reason } with { provider }</p>
            <p>{ location } </p>
          </div>
        )
      case 'providers' :
        const { name, clinic, phone, address, speciality  } = this.props
        return(
            <div className='card-container'>
            <i className="fas fa-trash-alt"></i>
            <i className="fas fa-edit"></i>
            <h3>Provider Information</h3>
            <p>{ name } </p>
            <p>{ clinic } </p>
            <p>{ phone } </p>
            <p>{ address } </p>
            <p>{ speciality } </p>
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

export default Card;