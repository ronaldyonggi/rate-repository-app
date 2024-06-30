import { StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import Tab from './Tab';

export default function AppBar() {
  return (
    <Pressable style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Tab title='Repositories' path={'/'} />
        <Tab title='Sign in' path={'/sign-in'} />
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
