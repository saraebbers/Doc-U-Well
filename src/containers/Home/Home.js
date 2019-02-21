import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postUserThunk } from '../../thunks/userThunk/postUserThunk'
import { getUserThunk } from '../../thunks/userThunk/getUserThunk'
import { logoutUser, clearAppointments, clearInsurance, clearProfile } from '../../actions/index'

export class Home extends Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: '',
      currentUser: ''
    }
  }

  async handleSubmit() {
    const { postUser, getUser} = this.props
    const { currentUser, email, password } = this.state
    const url = 'https://my-health-tracker.herokuapp.com/api/v1/users'
    if (currentUser === 'newUser') {
      const newUser = {email, password}
      await postUser(url, newUser)
      await this.resetLocalState(url, newUser)
    } else if (currentUser === 'oldUser') {
      const oldUser = {email, password}
      await getUser(url, oldUser)
      await this.resetLocalState(url, oldUser)
    } else {
      return
    }
  }

  resetLocalState(oldOrNewuser){
    this.setState({
      email: '',
      password: '',
      currentUser: ''
    })
  }

  resetGlobalState(event) {
    const { logoutUser, clearAppointments, clearProfile, clearInsurance } = this.props
    logoutUser()
    clearAppointments()
    clearProfile()
    clearInsurance()
  }

  displayFormOrMessage() {
    const { email, password } = this.state
    
    if(!this.props.user.id) {
      return(
        <div className="home-container">
          <div className="login">
            <form className="form-txt" onSubmit={(event) => {
              event.preventDefault()
              this.handleSubmit()}}>
              <h2 className="form-title">Log In</h2>
              Enter E-mail: <input type='email' placeholder='email' value={email} onChange={(event) => {
                this.setState({email:event.target.value})
              }}/><br/>
              Create/Enter Password: <input type='password' placeholder='password' value={password} onChange={(event) => {
                this.setState({password:event.target.value})
              }}/><br/>
              <button className='btn' onClick={(event) => {this.setState({currentUser: 'newUser'})}}>Sign Up</button>
              <button className='btn' onClick={(event) => {this.setState({currentUser: 'oldUser'})}}>Log In</button>
            </form>
          </div>
        </div>
      )
    } else {
      return(
        <div className="home-container"> 
          <section className="logout">
            <button className='btn' onClick={(event) => {this.resetGlobalState()}}>Log Out</button>
          </section>
        </div>
      )
    }
    
  }

  render() {
    return(
      this.displayFormOrMessage()
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.user
    }
}

export const mapDispatchToProps = (dispatch) => ({
  postUser: (url, newUser) => dispatch(postUserThunk(url, newUser)),
  getUser: (url, oldUser) => dispatch(getUserThunk(url, oldUser)),
  logoutUser: () => dispatch(logoutUser()),
  clearAppointments: () => dispatch(clearAppointments()),
  clearInsurance: () => dispatch(clearInsurance()),
  clearProfile: () => dispatch(clearProfile())
})

Home.propTypes = {
  type: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
