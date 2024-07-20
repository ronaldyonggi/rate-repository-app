import { StyleSheet, Pressable, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import Tab from './Tab';
import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';
import SignOutTab from './SignOutTab';

export default function AppBar() {
  const { loading, data } = useQuery(ME);

  if (loading) return <Text>Loading...</Text>;
  
  return (
    <Pressable style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Tab title='Repositories' path={'/'} />
        {data.me? <SignOutTab /> : <Tab title='Sign in' path={'/sign-in'} />}
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
