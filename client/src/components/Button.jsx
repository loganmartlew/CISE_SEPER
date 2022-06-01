import { Button as MuiButton, styled } from '@mui/material';

const getBgColor = (theme, variant, hover, color) => {
  if (variant === 'contained') {
    if (hover) {
      return theme.palette[color].light;
    }

    return theme.palette[color].main;
  }

  return 'transparent';
};

const getBorder = (theme, variant, hover, color) => {
  if (variant === 'contained') {
    if (hover) {
      return `2px solid ${theme.palette[color].light}`;
    }

    return `2px solid ${theme.palette[color].main}`;
  }

  if (variant === 'outlined') {
    if (hover) {
      return `2px solid ${theme.palette[color].light}`;
    }

    return `2px solid ${theme.palette.mono.dark}`;
  }

  return 'none';
};

const getTextColor = (theme, variant, hover, color) => {
  if (variant === 'contained') {
    return theme.palette.common.white;
  }

  if (variant === 'outlined') {
    if (hover) {
      return theme.palette[color].light;
    }

    return theme.palette.mono.dark;
  }

  if (variant === 'text') {
    if (hover) {
      return theme.palette[color].light;
    }

    return theme.palette[color].main;
  }

  if (variant === 'navlink') {
    if (hover) {
      return theme.palette[color].light;
    }

    return theme.palette.mono.dark;
  }

  return 'inherit';
};

const getPadding = (variant) => {
  if (variant !== 'contained' && variant !== 'outlined') return '';

  return '5px 16px';
};

const Button = styled(MuiButton)(({ theme, variant, color = 'primary' }) => ({
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  boxShadow: 'none',

  backgroundColor: getBgColor(theme, variant, false, color),
  border: getBorder(theme, variant, false, color),
  color: getTextColor(theme, variant, false, color),
  padding: getPadding(variant),

  '&:hover': {
    backgroundColor: getBgColor(theme, variant, true, color),
    border: getBorder(theme, variant, true, color),
    color: getTextColor(theme, variant, true, color),
    boxShadow: 'none',
  },
}));

export default Button;
