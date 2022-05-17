import { CssBaseline, GlobalStyles } from '@mui/material';
import Providers from './Providers';
import AppRoutes from './AppRoutes';
import globalStyles from './globalStyles';
import './imports.css';

const App = () => {
  return (
    <Providers>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <AppRoutes />
    </Providers>
  );
};

export default App;
