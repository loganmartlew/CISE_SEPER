import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './Header';

const AppShell = () => {
  return (
    <>
      <Header />
      <Container component='main'>
        <Outlet />
      </Container>
    </>
  );
};

export default AppShell;
