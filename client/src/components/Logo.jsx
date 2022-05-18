import { styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LogoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  letterSpacing: 4,
}));

const Logo = () => {
  return (
    <Link to='/'>
      <LogoText variant='h4' component='h1' fontSize='2.2rem' fontWeight={600}>
        SPEED
      </LogoText>
    </Link>
  );
};

export default Logo;
