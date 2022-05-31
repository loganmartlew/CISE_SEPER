import { useState, useEffect } from 'react';

export default () => {
  const [practices, setPractices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPractices = () => {
    fetch(`${import.meta.env.VITE_API_URL}/practices`)
      .then((res) => res.json())
      .then((data) => {
        setPractices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('An error ocurred while retrieving practices.');
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchPractices();
  }, []);

  const refetch = () => {
    fetchPractices();
  };

  return { practices, loading, error, refetch };
};
