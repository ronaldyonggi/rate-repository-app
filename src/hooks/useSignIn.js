import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
// import { useContext } from 'react';
// import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  // const authStorage = useContext(AuthStorageContext);
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN, {
    onError: (error) => {
      console.error(error);
    },
  });

  const signIn = async ({ username, password }) => {
    const res = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });
    return res;
  };

  return [signIn, result];
};

export default useSignIn;
