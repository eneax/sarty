import React from 'react'

import './sign.scss'
import SignIn from '../../components/signIn/signIn'
import SignUp from '../../components/signUp/signUp'


const Sign = () => {
  return (
    <div className='sign'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Sign
