import React from 'react'

import { SignContainer } from './signStyles'
import SignIn from '../../components/signIn/signIn'
import SignUp from '../../components/signUp/signUp'


const Sign = () => {
  return (
    <SignContainer>
      <SignIn />
      <SignUp />
    </SignContainer>
  )
}

export default Sign
