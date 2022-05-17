import { useState, useEffect } from 'react';
import ArticlesTable from '../features/articles/ArticlesTable';

const SearchArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/articles`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <>
      <h1>Articles</h1>
      {articles.map((article) => (
        <h3 key={article._id}>{article.title}</h3>
      ))}
      <ArticlesTable />
    </>
  );
};

export default SearchArticles;
