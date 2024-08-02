import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import CreateReviewContainer from '../../components/CreateReview/CreateReviewContainer';

describe('CreateReview', () => {
  describe('CreateReviewContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      render(<CreateReviewContainer onSubmit={onSubmit} />);

      fireEvent.changeText(screen.getByPlaceholderText('Repository owner name'), 'jaredpalmer');
      fireEvent.changeText(screen.getByPlaceholderText('Repository name'), 'formik');
      fireEvent.changeText(screen.getByPlaceholderText('Rating between 0 and 100'), '85');
      fireEvent.changeText(screen.getByPlaceholderText('Review'), 'Meh');
      fireEvent.press(screen.getByText('Create a review'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });

      await waitFor(() => {
        expect(onSubmit.mock.calls[0][0]).toEqual({
          repoOwner: 'jaredpalmer',
          repoName: 'formik',
          rating: '85',
          reviewText: 'Meh'
        });
      });
    });
  });
});
