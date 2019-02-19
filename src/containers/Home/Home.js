import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';


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

export default Home;
