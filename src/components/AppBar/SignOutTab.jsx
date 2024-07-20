import { useApolloClient } from '@apollo/client';
import { Text, Pressable, StyleSheet } from 'react-native';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useNavigate } from 'react-router-native';
import theme from '../../theme';

export default function SignOutTab() {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const handleLogout = async () => {
    // Remove user token from AuthStorage
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/sign-in');
  };
  return (
    <Pressable style={styles.container} onPress={handleLogout}>
      <Text fontWeight={'bold'} style={styles.tabText}>
        Sign out
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderColor: theme.colors.mainBackground,
    borderWidth: 1,
    alignItems: 'center',
  },
  tabText: {
    color: theme.colors.mainBackground,
  },
});
