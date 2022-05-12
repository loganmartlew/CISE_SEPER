import { Box, Typography } from '@mui/material';
import Card from '../components/Card';
import SubmitArticleForm from '../features/articles/SubmitArticleForm';

const SubmitArticlePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <Typography variant='h1' component='h2'>
        Submit An Article
      </Typography>
      <Card>
        <SubmitArticleForm />
      </Card>
    </Box>
  );
};

export default SubmitArticlePage;
