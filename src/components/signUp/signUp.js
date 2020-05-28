import React from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './signUpStyles';

import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        
        <form onClick={this.handleSubmit}>
          <FormInput
            label='Display Name'
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            label='Email'
            type='email'
            name='email' 
            value={email} 
            handleChange={this.handleChange} 
            required 
          />
          <FormInput
            label='Password'
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label='Confirm Password'
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

export default SignUp;