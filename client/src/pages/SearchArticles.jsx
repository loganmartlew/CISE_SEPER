import { useState, useEffect, useMemo } from 'react';
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
    <>
      <h1>Articles</h1>
      <ArticlesTable data={tableData} />
    </>
  );
};

export default SearchArticles;
