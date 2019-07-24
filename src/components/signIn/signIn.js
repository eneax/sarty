import React from 'react'

import './signIn.scss'
import FormInput from '../formInput/formInput'
import Button from '../button/button'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  }


  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ 
      [name]: value 
    })
  }


  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='email'
            type='email' 
            name='email' 
            value={this.state.email} 
            required 
            handleChange={this.handleChange}
          />

          <FormInput 
            label='password'
            type='password' 
            name='password' 
            value={this.state.password} 
            required
            handleChange={this.handleChange}
          />

          <Button type='submit'>Sign In</Button>
        </form>
      </div>
    )
  }
}

export default SignIn
