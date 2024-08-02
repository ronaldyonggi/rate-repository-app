import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { Controller, useForm } from 'react-hook-form';

export default function CreateReviewForm({ onSubmit, errorMessage }) {
  const initialValues = {
    repoOwner: '',
    repoName: '',
    rating: '',
    reviewText: '',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  return (
    <View style={styles.container}>
      {/* Repository owner name input field */}
      <Controller
        control={control}
        rules={{
          required: 'Repository owner name is required',
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Repository owner name'
            onChangeText={onChange}
            value={value}
            style={[styles.input, errors.repoOwner && styles.errorInput]}
          />
        )}
        name='repoOwner'
      />

      {errors.repoOwner && (
        <Text style={styles.errorText}>{errors.repoOwner.message}</Text>
      )}

      {/* Repository name input field */}
      <Controller
        control={control}
        rules={{
          required: 'Repository name is required',
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Repository name'
            onChangeText={onChange}
            value={value}
            style={[styles.input, errors.repoName && styles.errorInput]}
          />
        )}
        name='repoName'
      />
      {errors.repoName && (
        <Text style={styles.errorText}>{errors.repoName.message}</Text>
      )}

      {/* Rating input field */}
      <Controller
        control={control}
        rules={{
          required: 'Rating is required',
          min: {
            value: 0,
            message: 'Rating must be between 0 and 100',
          },
          max: {
            value: 100,
            message: 'Rating must be between 0 and 100',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Rating between 0 and 100'
            onChangeText={onChange}
            value={value}
            style={[styles.input, errors.rating && styles.errorInput]}
          />
        )}
        name='rating'
      />

      {errors.rating && (
        <Text style={styles.errorText}>{errors.rating.message}</Text>
      )}

      {/* Review input field */}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Review'
            onChangeText={onChange}
            value={value}
            style={[styles.input, errors.reviewText && styles.errorInput]}
            multiline={true}
          />
        )}
        name='reviewText'
      />

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text fontWeight='bold' color='primary'>
          Create a review
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
