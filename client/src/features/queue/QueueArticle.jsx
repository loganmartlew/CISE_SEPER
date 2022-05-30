/* eslint-disable react/jsx-one-expression-per-line */
import { Stack, Typography, Link, styled } from '@mui/material';
import Card from '../../components/Card';

const QueueCard = styled(Card)(({ theme, selected }) => ({
  border: `2px solid ${
    selected ? theme.palette.primary.main : theme.palette.common.white
  }`,
}));

const QueueArticle = ({ article, selected }) => {
  console.log(article);
  return (
    <QueueCard selected={selected}>
      <Stack spacing={2}>
        <Typography variant='h6'>{article.title}</Typography>
        <Typography fontWeight={600}>Authors:</Typography>
        <Typography fontStyle='italic'>
          {article.authors}
          {' - '}
          <Typography
            variant='inherit'
            component='span'
            fontWeight={600}
            sx={{ display: 'inline' }}
          >
            {article.year}
          </Typography>
        </Typography>
        <Typography>
          DOI: <Link href={article.doi}>{article.doi}</Link>
        </Typography>
      </Stack>
    </QueueCard>
  );
};

export default QueueArticle;
