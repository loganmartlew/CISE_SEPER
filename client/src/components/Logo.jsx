import { styled, Typography } from '@mui/material';

const LogoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  letterSpacing: 4,
}));

const Logo = () => {
  return (
    <LogoText variant='h4' component='h1' fontSize='2.2rem' fontWeight={600}>
      SPEED
    </LogoText>
  );
};

export default Logo;
