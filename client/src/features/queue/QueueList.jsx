import { Stack, Typography } from '@mui/material';
import QueueArticle from './QueueArticle';

const QueueList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return (
      <Typography variant='h6' component='p'>
        No articles in the queue.
      </Typography>
    );
  }

  return (
    <Stack spacing={2}>
      {articles.map((article, idx) => (
        <QueueArticle
          key={article._id}
          article={article}
          selected={idx === 0}
        />
      ))}
    </Stack>
  );
};

export default QueueList;
