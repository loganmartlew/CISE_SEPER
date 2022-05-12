import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SubmitArticlePage from '../pages/SubmitArticlePage';
import SearchArticles from '../pages/SearchArticles';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/search' element={<SearchArticles />} />
          <Route path='/submit' element={<SubmitArticlePage />} />
          <Route path='/moderationqueue' element={<h1>Moderation Queue</h1>} />
          <Route path='/analysisqueue' element={<h1>Analysis Queue</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
