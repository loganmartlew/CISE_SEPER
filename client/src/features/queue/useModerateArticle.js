import { useState } from 'react';

export default ({ onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const moderate = (articleId, data) => {
    setLoading(true);
    return fetch(`${import.meta.env.VITE_API_URL}/articles/moderation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ articleId, data }),
    })
      .then(() => {
        setLoading(false);
        onSuccess();
      })
      .catch(() => {
        setError('An error ocurred while moderating article.');
        setLoading(false);
        onError(error);
      });
  };

  return { moderate, loading };
};
