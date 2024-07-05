import { Platform } from 'react-native';

const theme = {
  colors: {
    appBarBackground: '#24292e',
    mainBackground: '#e1e4e8',
    repositoryItemBackground: 'white',
    primary: '#0366d6',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'Sans-serif',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
