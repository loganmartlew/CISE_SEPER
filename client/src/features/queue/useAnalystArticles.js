import { useState, useEffect } from 'react';

export default () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchArticles = () => {
    fetch(`${import.meta.env.VITE_API_URL}/articles/analysis`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('An error ocurred while retrieving articles.');
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchArticles();
  }, []);

  const refetch = () => {
    fetchArticles();
  };

  return { articles, loading, error, refetch };
};
