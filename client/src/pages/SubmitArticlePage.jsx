import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Card from '../components/Card';
import SubmitArticleForm from '../features/articles/SubmitArticleForm';

const SubmitArticlePage = () => {
  const navigate = useNavigate();

  const submit = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.sePractice = {
      name: 'TDD',
    };

    fetch(`${import.meta.env.VITE_API_URL}/articles`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ articleData: data }),
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/search');
      });
  };

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
        <SubmitArticleForm onSubmit={submit} />
      </Card>
    </Box>
  );
};

export default SubmitArticlePage;
