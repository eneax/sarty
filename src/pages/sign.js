import React from 'react'

import { SignContainer } from '../components/styles/signStyles'
import SignIn from '../components/signIn'
import SignUp from '../components/signUp'


const Sign = () => {
  return (
    <SignContainer>
      <SignIn />
      <SignUp />
    </SignContainer>
  )
}

export default Sign
