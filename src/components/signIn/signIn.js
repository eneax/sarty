import React from 'react'

import './signIn.scss'
import FormInput from '../formInput/formInput'


class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = (e) => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Email'
            type='email' 
            name='email' 
            value={this.state.email}
            handleChange={this.handleChange}
            required 
          />

          <FormInput
            label='Password'
            type='password' 
            name='password' 
            value={this.state.password} 
            handleChange={this.handleChange}
            required
          />

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    )
  }
}

export default SignIn
