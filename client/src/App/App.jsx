import { CssBaseline, GlobalStyles } from '@mui/material';
import AppRoutes from './AppRoutes';
import globalStyles from './globalStyles';

const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <AppRoutes />
    </>
  );
};

export default App;
