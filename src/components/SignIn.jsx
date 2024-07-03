import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Text from './Text'
import { useFormik } from 'formik';
import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  }); 

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
      style={styles.input}
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text fontWeight='bold' color='primary'>Sign in</Text>
      </Pressable>
    </View>
  )
}


export default function SignIn() {
  const onSubmit = (values) => {
    console.log(values);
  }
  return (
    <SignInForm onSubmit={onSubmit} />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryItemBackground,
    borderColor: 'red',
    borderWidth: 1,
    padding: 15,
  },
  input:{
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  }
})