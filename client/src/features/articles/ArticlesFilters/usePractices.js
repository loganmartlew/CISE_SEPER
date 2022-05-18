import { useState, useEffect } from 'react';

export default () => {
  const [practices, setPractices] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/practices`)
      .then((res) => res.json())
      .then((data) => setPractices(data));
  }, []);

  return { practices };
};
