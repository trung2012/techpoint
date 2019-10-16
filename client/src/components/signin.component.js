import React, { useState } from 'react';
import { connect } from 'react-redux';


import { signInAsync } from '../redux/user/user.actions';
import { clearErrors } from '../redux/error/error.actions';
import { selectIsSignedIn, selectSignInError } from '../redux/user/user.selectors';
import FormInput from './form-input.component';
import CustomButton from './custom-button.component';
import ErrorDisplay from './error-display.component';

import './signin.styles.scss';

const SignIn = ({ history, signIn, clearErrors, isSignedIn, signInError }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })
  const { email, password } = userCredentials;

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await signIn({ email, password });
      if (isSignedIn) {
        history.push('/')
      }
    } catch (err) {

    }
  }

  return (
    <div className='sign-in-page'>
      <div className='content-container'>
        <h1 className='sign-in-title'>Sign in</h1>
        <ErrorDisplay text={signInError} />
        <form className='sign-in-form' onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            required
            handleChange={handleChange}
            label='email'
            onFocus={() => clearErrors()}
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            required
            handleChange={handleChange}
            label='password'
            onFocus={() => clearErrors()}
          />
          <div className='buttons-container'>
            <CustomButton text='Sign in' />
          </div>
          <div className='more-options'>
            <span className='no-account'>Don't have an account?</span>
            <span className='register-link' onClick={() => history.push('/signup')}>Register Now</span>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signInAsync(user)),
  clearErrors: () => dispatch(clearErrors())
})

const mapStateToProps = state => ({
  isSignedIn: selectIsSignedIn(state),
  signInError: selectSignInError(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);