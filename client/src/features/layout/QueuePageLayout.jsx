import { Grid, Typography } from '@mui/material';

const QueuePageLayout = ({ error, loading, left, right }) => {
  if (loading) return <Typography>Loading...</Typography>;

  if (error) return <Typography>{error}</Typography>;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {left}
      </Grid>
      <Grid item xs={6}>
        {right}
      </Grid>
    </Grid>
  );
};

export default QueuePageLayout;
