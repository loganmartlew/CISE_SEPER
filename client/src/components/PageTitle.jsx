import { Typography } from '@mui/material';

const PageTitle = ({ children, sx }) => {
  return (
    <Typography variant='h3' component='h2' fontWeight={600} sx={sx}>
      {children}
    </Typography>
  );
};

export default PageTitle;
