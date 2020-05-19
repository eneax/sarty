import React from 'react';
import './signIn.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  }
  
  render() {
    return (
      <div className='signIn'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange} 
            required 
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            value={this.state.password} 
            onChange={this.handleChange} 
            required
          />

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }
}

export default SignIn;