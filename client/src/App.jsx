import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/articles`)
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return <div>Hello from client</div>;
};

export default App;
