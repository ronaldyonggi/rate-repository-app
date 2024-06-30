import { StyleSheet, View } from 'react-native';
import React from 'react';
import Text from '../Text';
import theme from '../../theme';
import { Link } from 'react-router-native';

export default function Tab({ title, path }) {
  return (
    <Link to={`${path}`} style={styles.container}>
      <Text fontWeight={'bold'} style={styles.tabText}>
        {title}
      </Text>
    </Link>
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
