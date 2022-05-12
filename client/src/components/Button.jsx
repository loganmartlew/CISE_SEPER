import { Button as MuiButton, styled } from '@mui/material';

const Button = styled(MuiButton)(({ theme }) => ({
  borderRadius: '8px',
  backgroundColor: theme.palette.primary.main,
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  boxShadow: 'none',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    boxShadow: 'none',
  },
}));

export default Button;
