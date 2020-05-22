import React from 'react';

import './authStyles.scss';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';

const Auth = () => (
  <div className="auth">
    <SignIn />
    <SignUp />
  </div>
);

export default Auth;
