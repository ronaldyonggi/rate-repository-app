import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Text from '../Text';
import theme from '../../theme';
import { Controller, useForm } from 'react-hook-form';
import { useApolloClient, useMutation } from '@apollo/client';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useNavigate } from 'react-router-native';
import { SIGN_IN } from '../../graphql/mutations';

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState('');
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const [signIn] = useMutation(SIGN_IN, {
    onError: (error) => {
      const messages = error.graphQLErrors.map((error) => error.message);
      setErrorMessage(messages);
    },
  });

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      // Get data from signIn mutation result
      const { data } = await signIn({
        variables: { credentials: { username, password } },
      });
      // Get accessToken from data
      const accessToken = data.authenticate.accessToken;

      // Store access token to authStorage
      await authStorage.setAccessToken(accessToken);

      // Reset Apollo Client's store (clear cache)
      await apolloClient.resetStore();

      // Navigate to repo list page
      navigate('/');
    } catch (e) {
      console.error(`Error at SignIn component: ${e}`);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: 'Username is required',
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Username'
            onChangeText={onChange}
            value={value}
            style={[styles.input, errors.username && styles.errorInput]}
          />
        )}
        name='username'
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: 'Password is required',
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Password'
            onChangeText={onChange}
            value={value}
            style={[styles.input, errors.password && styles.errorInput]}
            secureTextEntry={true}
          />
        )}
        name='password'
      />

      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text fontWeight='bold' color='primary'>
          Sign in
        </Text>
      </Pressable>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryItemBackground,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  input: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 4,
  },
  errorInput: {
    borderColor: theme.colors.error,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  errorText: {
    color: theme.colors.error,
  },
});
