import React from 'react'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      passwords: '',
    }
  }


  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' value={this.state.email} required />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' value={this.state.passwords} required />

          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default SignIn
