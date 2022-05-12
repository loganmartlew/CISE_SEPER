import { ThemeProvider } from '@mui/material';
import theme from './theme';

const Providers = ({ children }) => {
  console.log(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
