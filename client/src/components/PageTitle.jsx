import { Typography } from '@mui/material';

const PageTitle = ({ children }) => {
  return (
    <Typography variant='h3' component='h2' fontWeight={600}>
      {children}
    </Typography>
  );
};

export default PageTitle;
