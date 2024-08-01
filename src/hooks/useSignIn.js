import { useApolloClient, useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(SIGN_IN, {
    onError: (error) => {
      console.error(error);
    },
  });

  const signIn = async ({ username, password }) => {
    // Get data from mutate result
    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });

    // Get accessToken from data
    const accessToken = data.authenticate.accessToken;

    // Store access token to authStorage
    await authStorage.setAccessToken(accessToken);

    // Reset Apollo Client's store (clear cache)
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
