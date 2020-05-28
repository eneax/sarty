import React from 'react';

import { AuthContainer } from './authStyles';

import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';

const Auth = () => (
  <AuthContainer>
    <SignIn />
    <SignUp />
  </AuthContainer>
);

export default Auth;
