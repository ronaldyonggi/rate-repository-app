import { render, screen, within } from '@testing-library/react-native';
import RepositoryListContainer from './RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = screen.getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      const withinFirstRepoItem = within(firstRepositoryItem);
      const withinSecondRepoItem = within(secondRepositoryItem);

      // fullName tests
      expect(withinFirstRepoItem.getByTestId('fullName')).toHaveTextContent(
        'jaredpalmer/formik'
      );
      expect(withinSecondRepoItem.getByTestId('fullName')).toHaveTextContent(
        'async-library/react-async'
      );

      // description tests
      expect(withinFirstRepoItem.getByTestId('description')).toHaveTextContent(
        'Build forms in React, without the tears'
      );
      expect(withinSecondRepoItem.getByTestId('description')).toHaveTextContent(
        'Flexible promise-based React data loader'
      );

      // language tests
      expect(withinFirstRepoItem.getByTestId('language')).toHaveTextContent(
        'TypeScript'
      );
      expect(withinSecondRepoItem.getByTestId('language')).toHaveTextContent(
        'JavaScript'
      );

      // forksCount tests
      expect(withinFirstRepoItem.getByTestId('forksCount')).toHaveTextContent(
        '1.6k'
      );
      expect(withinSecondRepoItem.getByTestId('forksCount')).toHaveTextContent(
        '69'
      );

      // stargazersCount tests
      expect(withinFirstRepoItem.getByTestId('starsCount')).toHaveTextContent(
        '21.9k'
      );
      expect(withinSecondRepoItem.getByTestId('starsCount')).toHaveTextContent(
        '1.8k'
      );

      // ratingAverage tests
      expect(
        withinFirstRepoItem.getByTestId('ratingAverage')
      ).toHaveTextContent('88');
      expect(
        withinSecondRepoItem.getByTestId('ratingAverage')
      ).toHaveTextContent('72');

      // reviewCount tests
      expect(withinFirstRepoItem.getByTestId('reviewCount')).toHaveTextContent(
        '3'
      );
      expect(withinSecondRepoItem.getByTestId('reviewCount')).toHaveTextContent(
        '3'
      );
    });
  });
});
