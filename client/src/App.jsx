import { useState, useEffect } from 'react';

const useApi = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}`)
      .then((res) => res.text())
      .then(setMessage);
  }, []);

  return message;
};

const App = () => {
  const message = useApi();

  return (
    <>
      <div>Hello from client</div>
      <div>{message}</div>
    </>
  );
};

export default App;
