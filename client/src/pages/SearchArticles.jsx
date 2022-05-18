import { useMemo } from 'react';
import { Stack, Typography } from '@mui/material';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import ArticlesTable from '../features/articles/ArticlesTable';
import useSearchArticles from '../features/articles/useSearchArticles';
import SearchBar from '../components/SearchBar';

const SearchArticles = () => {
  const { articles, loading, error } = useSearchArticles('');

  const tableData = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      articles.map((article) => ({
        title: article.title,
        sePractice: article.sePractice.name,
        authors: article.authors,
        year: article.year,
        doi: article.doi,
      })),
    [articles]
  );

  console.log(tableData);

  return (
    <Stack spacing={3}>
      <PageTitle>Search For An Article</PageTitle>
      <SearchBar />
      <Card>
        {(() => {
          if (error) {
            return <Typography>{error}</Typography>;
          }

          if (loading) {
            return <Typography>Loading...</Typography>;
          }

          return <ArticlesTable data={tableData} />;
        })()}
      </Card>
    </Stack>
  );
};

export default SearchArticles;
