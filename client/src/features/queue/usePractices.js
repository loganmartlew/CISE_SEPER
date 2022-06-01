import { useState, useEffect } from 'react';
import delay from '../../util/delay';

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

  const addPractice = (name) => {
    setLoading(true);
    return fetch(`${import.meta.env.VITE_API_URL}/practices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => {
        return delay(1000).then(() => res);
      })
      .then((res) => {
        const neterror = !`${res.status}`.match(/^(1|2|3)\d\d$/);
        if (neterror) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then(() => {
        setLoading(false);
        refetch();
      });
  };

  return { practices, loading, error, refetch, addPractice };
};
