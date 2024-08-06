import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

export default function Text({ color, fontSize, fontWeight, style, ...props }) {
  const textStyle = [
    styles.text,
    color === 'secondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'danger' && styles.colorDanger,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.repositoryItemBackground,
    borderRadius: 4,
    flexGrow: 1,
  },
  colorDanger: {
    backgroundColor: theme.colors.error,
    color: theme.colors.repositoryItemBackground,
    borderRadius: 4,
    flexGrow: 1,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});
