import React, { Component } from 'react';
import './signup.css';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pwd: ''
    }
  }

  // when the user submits the form
  handleSignup = (e) => {
    e.preventDefault()
    // update the state in App to logged in
    this.props.isLogin(true)
  }

  handleChange = (e) => {
    // extract name attribute and corresponding value 
    const {name, value} = e.target
    this.setState({[name]:value})
  }

  render () {
    return (
      <div className="sign-up-form-container">
        <div className="welcome-header">
          {/* Will make component for this */}
          <h1>Welcome to FlipBuy</h1>
        </div>
        <form onSubmit={this.handleSignup}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email..." 
            required onChange={this.handleChange}
          />
          <input 
            type="password" 
            name="pwd" 
            placeholder="Password..." 
            required 
            onChange={this.handleChange}
          />
          <button onSubmit={this.handleSignup}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Signup;