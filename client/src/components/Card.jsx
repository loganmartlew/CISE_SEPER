import { Card as MuiCard, styled } from '@mui/material';

const Card = styled(MuiCard)(({ theme }) => ({
  padding: '1.7rem',
  borderRadius: '30px',
  backgroundColor: theme.palette.common.white,
  boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
}));

export default Card;
