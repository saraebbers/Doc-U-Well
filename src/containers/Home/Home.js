import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postUserThunk } from '../../thunks/userThunk/postUserThunk'
import { getUserThunk } from '../../thunks/userThunk/getUserThunk'


class Home extends Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: '',
      currentUser: ''
    }
  }

  async handleSubmit() {
    const { user, postUser, getUser} = this.props
    const { currentUser, email, password } = this.state
    const url = 'https://my-health-tracker.herokuapp.com/api/v1/users'
    if (currentUser === 'newUser') {
      const newUser = {email, password}
      await postUser(url, newUser)
      await this.handleNewUser(url, newUser)
    } else if (currentUser === 'oldUser') {
      const oldUser = {email, password}
      await getUser(url, oldUser)
      await this.handleNewUser(url, oldUser)
    } else {
      console.log('how did you get to else')
    }
  }

  handleNewUser(oldornewuser){
    this.setState({
      email: '',
      password: '',
      currentUser: ''
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
            <button onClick={(event) => {this.setState({currentUser: 'newUser'})}}>Submit NewUser</button>
            <button onClick={(event) => {this.setState({currentUser: 'oldUser'})}}>Submit OldUser</button>

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
  getUser: (url, oldUser) => dispatch(getUserThunk(url, oldUser)),

})

Home.propTypes = {
  type: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
