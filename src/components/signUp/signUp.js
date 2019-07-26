import React from 'react'

import './signUp.scss'
import FormInput from '../formInput/formInput'
import Button from '../button/button'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils' // because we are creating and authenticating new users


class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = () => {

  }

  handleChange = () => {

  }
  
  render() {
    const { displayName, email, password, confirmPassword } = this.state

    return (
      <div className='sign-up'>
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            label='Display Name'
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput 
            label='Email'
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput 
            label='password'
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput 
            label='confirm password'
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />

          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    )
  }
}

export default SignUp
