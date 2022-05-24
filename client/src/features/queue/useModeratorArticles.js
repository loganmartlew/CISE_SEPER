import { useState, useEffect } from 'react';

export default () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/articles/moderation`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('An error ocurred while retrieving articles.');
        console.log(err);
      });
  }, []);

  return { articles, loading, error };
};
