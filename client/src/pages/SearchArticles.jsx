import { Stack } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import PageTitle from '../components/PageTitle';
import ArticlesTable from '../features/articles/ArticlesTable';

const SearchArticles = () => {
  const [articles, setArticles] = useState([]);

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

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/articles`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <Stack spacing={3}>
      <PageTitle>Search For An Article</PageTitle>
      <ArticlesTable data={tableData} />
    </Stack>
  );
};

export default SearchArticles;
