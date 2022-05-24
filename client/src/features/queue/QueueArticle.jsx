import { Typography, styled } from '@mui/material';
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
      <Typography variant='h6'>{article.title}</Typography>
      <Typography fontWeight={600}>Authors:</Typography>
      <Typography fontStyle='italic'>
        {article.authors}
        {' - '}
        <Typography
          variant='inherit'
          fontWeight={600}
          sx={{ display: 'inline' }}
        >
          {article.year}
        </Typography>
      </Typography>
    </QueueCard>
  );
};

export default QueueArticle;
