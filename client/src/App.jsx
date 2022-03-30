import { useState, useEffect } from 'react';

const useApi = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000`)
      .then(res => res.text())
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
