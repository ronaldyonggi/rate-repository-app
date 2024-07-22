import React from 'react'
import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

export default function SignIn() {
  const [signIn] = useSignIn();
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
  return <SignInContainer onSubmit={onSubmit} />;
}