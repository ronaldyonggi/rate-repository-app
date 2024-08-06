import { View, StyleSheet, Pressable, Alert } from 'react-native';
import React from 'react';
import theme from '../../theme';
import Text from '../Text';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-native';
import useDeleteReview from '../../hooks/useDeleteReview';

const formatDate = (date) => {
  const dateObj = new Date(date);
  return format(dateObj, 'MMMM do, yyyy');
};

export default function ReviewItem({ review, refetch }) {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();
  const { id, repository, createdAt, text, rating } = review;
  const formattedCreateAt = formatDate(createdAt);

  const handleViewRepository = () => {
    navigate(`/repository/${repository.id}`);
  };

  const handleDeleteReview = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await deleteReview(id);
            await refetch();
          },
          style: 'destructive', // iOS only
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
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
      <View style={styles.buttonsContainer}>
        <Pressable onPress={handleViewRepository}>
          <Text style={styles.buttonText} color='primary' fontWeight='bold'>
            View repository
          </Text>
        </Pressable>
        <Pressable onPress={handleDeleteReview}>
          <Text style={styles.buttonText} color='danger' fontWeight='bold'>
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: theme.colors.repositoryItemBackground,
    paddingVertical: 15,
  },
  infoContainer: {
    flexDirection: 'row',
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  buttonText: {
    padding: 15,
  },
});
