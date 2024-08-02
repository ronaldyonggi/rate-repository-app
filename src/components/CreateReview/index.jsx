import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import useCreateReview from '../../hooks/useCreateReview';
import CreateReviewForm from './CreateReviewForm';

export default function CreateReview() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [createReview] = useCreateReview(setErrorMessage);

  const onSubmit = async (values) => {
    const { repoName, repoOwner, rating, reviewText } = values;
    try {
      const data = await createReview({
        repoName,
        repoOwner,
        rating,
        reviewText,
      });
      const repoId = data.createReview.repositoryId;
      navigate(`/repository/${repoId}`);
    } catch (e) {
      console.error(`Error at CreateReview component: ${e}`);
    }
  };
  return <CreateReviewForm onSubmit={onSubmit} errorMessage={errorMessage} />;
}
