import React, { useState } from 'react';
import FormInput from './form-input.component';
import CustomButton from './custom-button.component';

import './signin.styles.scss';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })
  const { email, password } = userCredentials;

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className='sign-in'>
      <div className='content-container'>
        <h1 className='sign-in-title'>Sign in with email</h1>
        <form>
          <FormInput
            name='email'
            type='email'
            value=''
            required
            handleChange={handleChange}
            label='email'
            placeholder='johndoe@example.com'
          />
          <FormInput
            name='password'
            type='password'
            value=''
            required
            handleChange={handleChange}
            label='password'
          />
          <CustomButton text='Sign in' />
        </form>
      </div>
    </div>
  );
}

export default SignIn;