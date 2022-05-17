import { Button as MuiButton, styled } from '@mui/material';

const getBgColor = (theme, variant, hover) => {
  if (variant === 'contained') {
    if (hover) {
      return theme.palette.primary.light;
    }

    return theme.palette.primary.main;
  }

  return 'transparent';
};

const getBorder = (theme, variant, hover) => {
  if (variant === 'contained') {
    if (hover) {
      return `2px solid ${theme.palette.primary.light}`;
    }

    return `2px solid ${theme.palette.primary.main}`;
  }

  if (variant === 'outlined') {
    if (hover) {
      return `2px solid ${theme.palette.primary.light}`;
    }

    return `2px solid ${theme.palette.mono.dark}`;
  }

  return 'none';
};

const getTextColor = (theme, variant, hover) => {
  if (variant === 'contained') {
    return theme.palette.common.white;
  }

  if (variant === 'outlined') {
    if (hover) {
      return theme.palette.primary.light;
    }

    return theme.palette.mono.dark;
  }

  if (variant === 'text') {
    if (hover) {
      return theme.palette.primary.light;
    }

    return theme.palette.primary.main;
  }

  if (variant === 'navlink') {
    if (hover) {
      return theme.palette.primary.light;
    }

    return theme.palette.mono.dark;
  }

  return 'inherit';
};

const getPadding = (variant) => {
  if (variant !== 'contained' && variant !== 'outlined') return '';

  return '5px 16px';
};

const Button = styled(MuiButton)(({ theme, variant }) => ({
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  boxShadow: 'none',

  backgroundColor: getBgColor(theme, variant, false),
  border: getBorder(theme, variant, false),
  color: getTextColor(theme, variant, false),
  padding: getPadding(variant),

  '&:hover': {
    backgroundColor: getBgColor(theme, variant, true),
    border: getBorder(theme, variant, true),
    color: getTextColor(theme, variant, true),
    boxShadow: 'none',
  },
}));

export default Button;
