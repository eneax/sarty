import React from 'react';
import styled from 'styled-components';

import { auth, signInWithGoogle } from '../firebase/firebase.utils'

import FormInput from './formInput';
import CustomButton from './customButton';

// styles
const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const SignInTitle = styled.h2`
  margin: 10px 0;
`;

const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// component
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      
      // clear form
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  
  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            label='Email'
            type="email"
            name="email" 
            value={this.state.email} 
            handleChange={this.handleChange} 
            required 
          />

          <FormInput 
            label='Password'
            type="password"
            name="password" 
            value={this.state.password} 
            handleChange={this.handleChange} 
            required 
          />

          <ButtonsBarContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn;
