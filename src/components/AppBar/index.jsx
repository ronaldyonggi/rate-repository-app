import { Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import Tab from './Tab';

export default function AppBar() {
  return (
    <Pressable style={styles.container}>
      <Tab title='Repositories' path={'/'} />
      <Tab title='Sign in' path={'/sign-in'}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
  },
});
