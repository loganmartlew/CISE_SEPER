import { CssBaseline, GlobalStyles } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Providers from './Providers';
import AppRoutes from './AppRoutes';
import globalStyles from './globalStyles';
import notificationStyles from './notificationStyles';
import './imports.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Providers>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <AppRoutes />
      <ToastContainer
        theme='colored'
        position='bottom-right'
        autoClose={5000}
      />
      <GlobalStyles styles={notificationStyles} />
    </Providers>
  );
};

export default App;
