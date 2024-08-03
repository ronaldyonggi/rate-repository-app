import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import useSignUp from '../../hooks/useSignUp';
import SignUpForm from './SignUpForm';

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const [signUp] = useSignUp(setErrorMessage);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      navigate('/');
    } catch (e) {
      console.error(`Error at SignUp component: ${e}`);
    }
  };
  return <SignUpForm onSubmit={onSubmit} errorMessage={errorMessage} />;
}
