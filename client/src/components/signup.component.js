import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpAsync } from '../redux/user/user.actions';

import FormInput from './form-input.component';
import CustomButton from './custom-button.component';

import './signup.styles.scss';

const SignUp = ({ history, signUpAsync }) => {
  const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { email, password, confirmPassword, displayName } = userCredentials;

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please try again!')
    }

    signUpAsync({ displayName, email, password });
  }

  return (
    <div className='sign-up-page'>
      <div className='content-container'>
        <h1 className='sign-up-title'>Sign up with email</h1>
        <div className='error-message'>{errorMessage}</div>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            value={displayName}
            required
            handleChange={handleChange}
            label='Display Name'
          />
          <FormInput
            name='email'
            type='email'
            value={email}
            required
            handleChange={handleChange}
            label='email'
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            required
            handleChange={handleChange}
            label='password'
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            required
            handleChange={handleChange}
            label='Confirm password'
          />
          <div className='buttons-container'>
            <CustomButton text='Sign Up' />
          </div>
          <div className='more-options'>
            <span>Already have an account?</span>
            <span className='register-link' onClick={() => history.push('/signin')}>Sign In</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(null, { signUpAsync })(SignUp);