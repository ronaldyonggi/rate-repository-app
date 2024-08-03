import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { Controller, useForm } from 'react-hook-form';

export default function SignUpForm({ onSubmit, errorMessage }) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const firstPassword = watch('password');

  return (
    <View style={styles.container}>
      {/* Username input field */}
      <Controller
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 5,
            message: 'Username must be at least 5 characters',
          },
          maxLength: {
            value: 30,
            message: 'Username must be no more than 30 characters',
          },
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

      {/* Password input field */}
      <Controller
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 5,
            message: 'Password must be at least 5 characters',
          },
          maxLength: {
            value: 30,
            message: 'Password must be no more than 30 characters',
          },
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

      {/* Password confirmation field */}
      <Controller
        control={control}
        rules={{
          required: 'Password confirmation is required',
          validate: (value) =>
            value === firstPassword || 'Passwords do not match',
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Password confirmation'
            onChangeText={onChange}
            value={value}
            style={[styles.input, errors.confirmPassword && styles.errorInput]}
            secureTextEntry={true}
          />
        )}
        name='confirmPassword'
      />

      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
      )}

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text fontWeight='bold' color='primary'>
          Sign up
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
