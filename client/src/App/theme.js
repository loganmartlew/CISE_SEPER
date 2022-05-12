import { createTheme } from '@mui/material';
import { lighten, darken } from 'polished';

const baseColors = {
  light: 'hsla(0, 0%, 93.7%, 1)',
  dark: 'hsla(0, 0%, 37%, 1)',
  primary: 'hsla(216, 100%, 50%, 1)',
};

const colors = {
  light: baseColors.light,
  dark: baseColors.dark,
  primary: {
    main: baseColors.primary,
    light: lighten(0.09, baseColors.primary),
    dark: darken(0.09, baseColors.primary),
  },
};

const theme = createTheme({
  palette: {
    mono: {
      light: colors.light,
      dark: colors.dark,
    },
    primary: colors.primary,
    text: {
      primary: colors.dark,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    fontWeightBold: 600,
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
    },
  },
});

export default theme;
