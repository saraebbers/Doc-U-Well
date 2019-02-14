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
      weight: '',
    }
  }

  render() {
    return(
      <section>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.handleProfileSubmit(this.state)}
        }>
          <input placeholder='Blood Type' value={this.state.blood} onChange={(event) => this.setState({blood: event.target.value})}/>
          <input placeholder='Height' value={this.state.height} onChange={(event) => this.setState({height: event.target.value})}/>
          <input placeholder='Weight' value={this.state.weight} onChange={(event) => this.setState({weight: event.target.value})}/>
          <button>Submit</button>
        </form>
      </section>
    )
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
    // handleAppointmentSubmit: (text => {
    //   dispatch(addAppointment(text))
    // }),
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
