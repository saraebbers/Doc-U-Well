import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card'
import Schedule from '../../components/Schedule/Schedule'
import { connect } from 'react-redux';
import { apiKey } from '../../utils/apiKey'
import { getAllAppointmentsThunk } from '../../thunks/appointmentThunk/getAppointmentsThunk'
import { getAllProvidersThunk } from '../../thunks/providerThunk/getProvidersThunk'




class Display extends Component {
  constructor() {
    super()
    this.state = {
      toggleForm: false
    }
  }

  showForm () {
    this.setState({toggleForm: !this.state.toggleForm})
  }

  returnJsx (btnName, responseArray) {
    let info = responseArray.map(arrayItem => {
      return <Card {...arrayItem} type={this.props.type} key='arrayItem.name'/>
    })

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
    let url
    let btnName
    let responseArray
    const { type, getAllProviders, provider} = this.props

    switch (type) {
      case 'profile' :
        url = 'url to get profile'
        // await this.props.fetchProfile(url)
        btnName = 'Add Profile'
        responseArray = [{blood: 'A+', height: '5,7', weight: '170', bps: '120', bpd: '80', hr: '60' }]
        return this.returnJsx(btnName, responseArray)

      case 'appointments' :
        url = 'url for get all appointments'
        // await this.props.fetchAppointments(url)
        btnName = 'Add Appointment'
        responseArray = [{date: 'Feb 14, 2019', time: '9:00 am', reason: 'Annual checkup', provider: 'Dr. Love', location: '124 Street Rd. Midlothian, VA 45459'}, {date: 'Jan 24, 2019', time: '7:00 am', reason: 'dentist', provider: 'Dr. FeelGood', location: '555 Street Rd. Denver, CO 88888'}, {date: 'June 4, 2019', time: '5:00 pm', reason: 'lab-work', provider: 'n/a', location: '14 Green Blvd. Beach, CA 00087'},{date: 'Feb 14, 2019', time: '9:00 am', reason: 'Annual checkup', provider: 'Dr. Love', location: '124 Street Rd. Midlothian, VA 45459'}, {date: 'Jan 24, 2019', time: '7:00 am', reason: 'dentist', provider: 'Dr. FeelGood', location: '555 Street Rd. Denver, CO 88888'}, {date: 'June 4, 2019', time: '5:00 pm', reason: 'lab-work', provider: 'n/a', location: '14 Green Blvd. Beach, CA 00087'}]
        return this.returnJsx(btnName, responseArray)

      case 'providers' :
        url = 'https://my-health-tracker.herokuapp.com/api/v1/providers'
                // await this.props.fetchProviders(url)
        getAllProviders(url)
        btnName = 'Add Provider'
        responseArray = provider
        return this.returnJsx(btnName, responseArray)

      case 'insurance' :
        url = 'url for get all insurance'
        // await this.props.fetchInsurance(url)
        btnName = 'Add Insurance'
        responseArray = [{card: 'Doctor', image: ':-)'}, {card: 'Dentist', image: ':-0'}]
        return this.returnJsx(btnName, responseArray)

      default:
        return ('hit display default')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    appointment: state.appointments,
    provider: state.provider,
    insurance: state.insurance,
    profile: state.profile,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    }
}

const mapDispatchToProps = (dispatch) => ({
  getAllAppointments: (url => {
    dispatch(getAllAppointmentsThunk(url))
  }),
  getAllProviders: (url => {
    dispatch(getAllProvidersThunk(url))
  }),
  // getAllInsurance: (url => {
  //   dispatch(getAllInsuranceThunk(url))
  // }),
  // getAllProfile: (url => {
  //   dispatch(GetAllProfileThunk(url))
  // }),
})

Display.propTypes = {
  type: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
