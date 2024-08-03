import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';

export default function useSignUp(setErrorMessage) {
  const [mutate, result] = useMutation(SIGN_UP, {
    onError: (error) => {
      const messages = error.graphQLErrors.map((error) => error.message);
      setErrorMessage(messages);
    },
  });

  const signUp = async ({ username, password }) => {
    // Get data from mutate result
    await mutate({
      variables: {
        user: {
          username,
          password,
        },
      },
    });
  };

  return [signUp, result];
}
