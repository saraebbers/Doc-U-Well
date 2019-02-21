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
      profileNameId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInsurance = this.handleChangeInsurance.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeSpeciality = this.handleChangeSpeciality.bind(this);
    this.handleChangeBlood = this.handleChangeBlood.bind(this);
    this.handleChangeProfileName = this.handleChangeProfileName.bind(this);
    this.handleChangeApptName = this.handleChangeApptName.bind(this);
    this.handleChangeApptProvider = this.handleChangeApptProvider.bind(this);
  }

  handleChange(date) {
    this.setState({startDate: date});
  }

  handleChangeInsurance(event) {
    this.setState({insuranceType: event.target.value})
  }

  handleChangeState(event) {
    this.setState({state: event.target.value})
  }

  handleChangeSpeciality(event) {
    this.setState({speciality: event.target.value})
  }

  handleChangeBlood(event) {
    this.setState({blood: event.target.value})
  }

  handleChangeProfileName(event) {
    this.setState({profileNameId: event.target.value})
  }

  handleChangeApptName(event) {
    this.setState({profileApptId: event.target.value})
  }

  handleChangeApptProvider(event) {
    this.setState({provider: event.target.value})
  }

  handleSubmit() {
    const { user, type, profile, handleProfileSubmit, handleAppointmentSubmit, handleProviderSubmit, handleInsuranceSubmit } = this.props
    const { userFirst, userLast, dob, blood, height, weight, bps, bpd, hr, startDate, ap, provider, providerFirst, providerLast, phone, streetAddress, city, state, zip, kind, speciality, insuranceType, polNum, insurancePhone, groupNumber, carrier, notes, profileNameId, profileApptId } = this.state
    let payload

    switch (type) {
      case 'profile' :
        payload = {
          api_key: user.attributes.api_key,
          user_id: user.id,
          provider_id: provider,
          given_name: userFirst,
          surname: userLast,
          dob: dob,
          height: height,
          weight: weight,
          bp_systolic: bps,
          bp_diastolic: bpd,
          heart_rate: hr,
          blood_type: blood
        }
        handleProfileSubmit(user, payload)
        this.setState({userFirst: '', userLast: '', dob: '',  blood: '', height: '', weight: '', bps: '', bpd: '', hr: '', provider: '' })
        break
      case 'appointments' :
        payload = {
          datetime: this.state.startDate,
          api_key: user.attributes.api_key,
          profile_id: profileApptId,
          provider_id: provider
        }
        handleAppointmentSubmit(user, payload)
        this.setState({startDate: new Date(), kind: '', provider: '', notes: ''})
        break
      case 'providers' :
        payload = {
          given_name: providerFirst,
          surname: providerLast,
          phone: phone,
          street_address: streetAddress,
          city: city,
          state: state,
          zip: zip,
          speciality: speciality,
          api_key: user.attributes.api_key}
        handleProviderSubmit(user, payload)
        this.setState({providerFirst: '', providerLast: '', phone: '', streetAddress: '', city: '', state: '', zip: '', speciality: ''})
        break
      case 'insurance' :
        payload = {
          insurance_type: insuranceType,
          carrier: carrier,
          id_number: polNum,
          group_number: groupNumber,
          phone_number: insurancePhone,
          profile_id: profileNameId,
          api_key: user.attributes.api_key,
        }
        handleInsuranceSubmit(user, payload)
        this.setState({carrier: '', insuranceType: '', polNum: '', groupNumber: '', insurancePhone: '', profileNameId: ''})
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
            <label>Blood Type:
              <select value={this.state.blood} onChange={this.handleChangeBlood}>
                <option  selected={true}>Select Below</option>
                <option value="o_negative">O-</option>
                <option value="o_positive">O+</option>
                <option value="a_negative">A-</option>
                <option value="a_positive">A+</option>
                <option value="b_negative">B-</option>
                <option value="b_positive">B+</option>
                <option value="ab_negative">AB-</option>
                <option value="ab_positive">AB+</option>
                </select>
              </label>
            <br/>
            Primary Provider: <input placeholder='Provider' value={provider} onChange={(event) => this.setState({provider: event.target.value})}/>
            <br/>
          </div>
        )
        return this.informationSubmission(formData)
      case 'appointments' :
        let apptNameChoices = this.props.profile.map(pf => {
          return {apptName: pf.attributes.given_name, apptId: pf.id}
        })
        let apptListName = apptNameChoices.map(apptName => {
        let apptUserName = apptName.apptName
        return (
          <option value={`${apptName.apptId}`} key={`${apptName.apptId}`}>{apptUserName}</option>
        )
        })

        let providerChoices = this.props.provider.map(pf => {
          return {providerName: pf.attributes.given_name, providerId: pf.id}
        })
        let apptProviders = providerChoices.map(providerName => {
        let pName = providerName.providerName
        return (
          <option value={`${providerName.providerId}`} key={`${providerName.providerId}`}>{pName}</option>
        )
        })

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
            <label>Provider Related to Appointment:
              <select required value={this.state.apptProviderId} onChange={this.handleChangeApptProvider}>
                <option  selected={true}>Select Below</option>
                { apptProviders }
              </select>
            </label>
            <br/>
            <label>Profile User Related to Appointment:
              <select required value={this.state.apptNameId} onChange={this.handleChangeApptName}>
                <option  selected={true}>Select Below</option>
                { apptListName }
              </select>
            </label>
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
            <label>State:
              <select value={this.state.state} onChange={this.handleChangeState}>
                <option  selected={true}>Select Below</option>
                <option value="AK">AK</option>
                <option value="AL">AL</option>
                <option value="AR">AR</option>
                <option value="AZ">AZ</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="IA">IA</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="MA">MA</option>
                <option value="MD">MD</option>
                <option value="ME">ME</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MO">MO</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="NE">NE</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NV">NV</option>
                <option value="NY">NY</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VA">VA</option>
                <option value="VT">VT</option>
                <option value="WA">WA</option>
                <option value="WI">WI</option>
                <option value="WV">WV</option>
                <option value="WY">WY</option>
              </select>
            </label>
            <br/>
            Zip: <input placeholder='Zip Code' value={zip} onChange={(event) => this.setState({zip: event.target.value})}/>
            <br/>
            <label>Speciality:
              <select value={this.state.speciality} onChange={this.handleChangeSpeciality}>
                <option  selected={true}>Select Below</option>
                <option value="allergist">allergist</option>
                <option value="anesthesiologist">anesthesiologist</option>
                <option value="cardiologist">cardiologist</option>
                <option value="dentist">dentist</option>
                <option value="dermatologist">dermatologist</option>
                <option value="endocrinologist">endocrinologist</option>
                <option value="general_practitioner">general_practitioner</option>
                <option value="gastroenterologist">gastroenterologist</option>
                <option value="geneticist">geneticist</option>
                <option value="geriatric_specialist">geriatric_specialist</option>
                <option value="gynecologist">gynecologist</option>
                <option value="hematologist">hematologist</option>
                <option value="internist">internist</option>
                <option value="massage_therapist">massage_therapist</option>
                <option value="naturopath">naturopath</option>
                <option value="nephrologist">nephrologist</option>
                <option value="neurologist">neurologist</option>
                <option value="obstetrician">obstetrician</option>
                <option value="oncologist">oncologist</option>
                <option value="ophthalmologist">ophthalmologist</option>
                <option value="optometrist">optometrist</option>
                <option value="osteopath">osteopath</option>
                <option value="palliative">palliative</option>
                <option value="pediatrician">pediatrician</option>
                <option value="podiatrist">podiatrist</option>
                <option value="psychiatrist">psychiatrist</option>
                <option value="pulmonologist">pulmonologist</option>
                <option value="radiologist">radiologist</option>
                <option value="rheumatologist">rheumatologist</option>
                <option value="surgeon">surgeon</option>
                <option value="urologist">urologist</option>
                </select>
              </label>
          </div>
        )
        return this.informationSubmission(formData)
      case 'insurance' :
        let nameChoices = this.props.profile.map(pf => {
          return {name: pf.attributes.given_name, id: pf.id}
        })
        let listName = nameChoices.map(namech => {
          let profileUserName = namech.name
          return (
            <option value={`${namech.id}`} key={`${namech.id}`}>{profileUserName}</option>
          )
        })

        formData = (
          <div className='form-info'>
            Insurance Carrier: <input placeholder='Insurance Carrier' value={carrier} onChange={(event) => this.setState({carrier: event.target.value})}/>
            <br/>
            <label>Insurance Type:
              <select required value={this.state.insuranceType} onChange={this.handleChangeInsurance}>
                <option  selected={true}>Select Below</option>
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
            <label>Profile User Related to Insurance:
              <select required value={this.state.profileNameId} onChange={this.handleChangeProfileName}>
                <option  selected={true}>Select Below</option>
                { listName }
              </select>
            </label>
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
