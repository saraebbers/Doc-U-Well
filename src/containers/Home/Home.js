import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postUserThunk } from '../../thunks/userThunk/postUserThunk'

class Home extends Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: ''
    }
  }

  async handleSubmit() {
    const { email, password } = this.state
    const newUser = {...this.state}
    const url = 'https://my-health-tracker.herokuapp.com/api/v1/users'
    await this.props.postUser(url, newUser)
    await this.handleNewUser(url, newUser)
  }

  handleNewUser(newUser){
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const { email, password } = this.state
    return(
      <div className="home-container">
        <div className="login">
          <form onSubmit={(event) => {
            event.preventDefault()
            this.handleSubmit()}}>
            <h2>Sign Up</h2>
            Enter e-mail: <input type='email' placeholder='email' value={email} onChange={(event) => {
              this.setState({email:event.target.value})
            }}/><br/>
            Create password: <input type='password' placeholder='password' value={password} onChange={(event) => {
              this.setState({password:event.target.value})
            }}/><br/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    }
}

export const mapDispatchToProps = (dispatch) => ({
  postUser: (url, newUser) => dispatch(postUserThunk(url, newUser)),
})

Home.propTypes = {
  type: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
