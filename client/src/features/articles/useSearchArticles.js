import { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';

export default (q) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const debouncedSearchTerm = useDebounce(q, 400);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/articles?q=${debouncedSearchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('An error ocurred while retrieving articles.');
        console.log(err);
      });
  }, [debouncedSearchTerm]);

  return { articles, loading, error };
};
