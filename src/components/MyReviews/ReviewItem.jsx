import { View, StyleSheet } from 'react-native';
import React from 'react';
import theme from '../../theme';
import Text from '../Text';
import { format } from 'date-fns';

const formatDate = (date) => {
  const dateObj = new Date(date);
  return format(dateObj, 'MMMM do, yyyy');
};

export default function ReviewItem({ review }) {
  const { repository, createdAt, text, rating } = review;
  const formattedCreateAt = formatDate(createdAt);
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText} fontWeight='bold'>
          {rating}
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text fontWeight='bold'>{repository.fullName}</Text>
        <Text style={styles.createdAt} color='secondary'>
          {formattedCreateAt}
        </Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: theme.colors.repositoryItemBackground,
    flexDirection: 'row',
    paddingVertical: 15,
  },
  ratingContainer: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    width: 50,
    height: 50,
    marginHorizontal: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    color: theme.colors.primary,
  },
  descriptionContainer: {
    maxWidth: 280,
  },
  createdAt: {
    marginTop: 1,
    marginBottom: 3,
  },
});
