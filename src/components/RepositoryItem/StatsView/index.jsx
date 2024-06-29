import { View, StyleSheet } from 'react-native';
import React from 'react';
import CountView from './CountView';

export default function StatsView({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) {
  const countConverter = (count) => {
    if (count > 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
  };
  return (
    <View style={styles.container}>
      <CountView count={countConverter(stargazersCount)} property="Stars" />
      <CountView count={countConverter(forksCount)} property="Forks" />
      <CountView count={reviewCount} property="Reviews" />
      <CountView count={ratingAverage} property="Rating" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
});
