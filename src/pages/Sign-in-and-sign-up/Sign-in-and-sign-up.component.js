import React from 'react'
import SignIn from '../../components/Sign-in/Sign-In.component'
import SignUp from '../../components/Sign-up/Sign-up.component'
import './Sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage
