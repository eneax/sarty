import React from 'react'

import { auth, signInWithGoogle } from '../firebase/firebase.utils'

import {
  SignInContainer,
  SignInTitle,
  ButtonsContainer,
} from './styles/signInStyles'
import FormInput from './formInput'
import CustomButton from './customButton'


class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)

      // clear form
      this.setState({
        email: '',
        password: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return(
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
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

          <ButtonsContainer>
            <CustomButton type='submit'>
                Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn
