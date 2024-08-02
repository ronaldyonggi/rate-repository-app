import React, { useState } from 'react';
import SignInForm from './SignInForm';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState('');
  const [signIn] = useSignIn(setErrorMessage);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.error(`Error at SignIn component: ${e}`);
    }
  };
  return <SignInForm onSubmit={onSubmit} errorMessage={errorMessage} />;
}
