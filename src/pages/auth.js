import React from 'react';
import styled from 'styled-components';

import SignIn from '../components/signIn';
import SignUp from '../components/signUp';

const AuthContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const Auth = () => (
  <AuthContainer>
    <SignIn />
    <SignUp />
  </AuthContainer>
);

export default Auth;
