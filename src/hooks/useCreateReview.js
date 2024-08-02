import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = (setErrorMessage) => {
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    onError: (error) => {
      const messages = error.graphQLErrors.map((error) => error.message);
      setErrorMessage(messages);
    },
  });

  const createReview = async ({ repoName, repoOwner, rating, reviewText }) => {
    const { data } = await mutate({
      variables: {
        review: {
          repositoryName: repoName,
          ownerName: repoOwner,
          rating: parseInt(rating),
          text: reviewText,
        },
      },
    });
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;
