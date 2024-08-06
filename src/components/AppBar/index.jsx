import { StyleSheet, Pressable, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import Tab from './Tab';
import { useQuery } from '@apollo/client';
import SignOutTab from './SignOutTab';
import { GET_CURRENT_USER } from '../../graphql/queries';

export default function AppBar() {
  const { loading, data } = useQuery(GET_CURRENT_USER);

  if (loading) return <Text>Loading...</Text>;

  return (
    <Pressable style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Tab title='Repositories' path={'/'} />

        {/* display Create a review tab only if a user's signed in */}
        {data.me && <Tab title='Create a review' path={'/create-review'} />}

        {/* display My reviews only if a user's signed in */}
        {data.me && <Tab title='My reviews' path={'/my-reviews'} />}

        {/* display Sign in tab only if no user is signed in, otherwise display Sign out */}
        {data.me ? <SignOutTab /> : <Tab title='Sign in' path={'/sign-in'} />}

        {/* display Sign Up tab only if no user is signed in */}
        {!data.me && <Tab title='Sign up' path={'/sign-up'} />}
      </ScrollView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
});
