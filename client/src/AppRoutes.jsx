import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/moderationqueue' element={<h1>Moderation Queue</h1>} />
        <Route path='/analysisqueue' element={<h1>Analysis Queue</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
