import { Typography } from '@mui/material';

const QueuePageLayout = ({ error, loading, left, right }) => {
  if (loading) return <Typography>Loading...</Typography>;

  if (error) return <Typography>{error}</Typography>;

  return <div>{left}</div>;
};

export default QueuePageLayout;
