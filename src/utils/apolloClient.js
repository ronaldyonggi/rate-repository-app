import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

const { apollo_uri } = Constants.expoConfig.extra;

const httpLink = createHttpLink({
  uri: apollo_uri,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
});

/* PREVIOUS APOLLO SETUP

const createApolloClient = () => {
  return new ApolloClient({
    uri: Constants.expoConfig.extra.apollo_uri,
    cache: new InMemoryCache(),
  });
};
*/

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return headers;
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
};

export default createApolloClient;
