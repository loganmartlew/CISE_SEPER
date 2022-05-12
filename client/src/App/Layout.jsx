import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      {/* Header */}
      <Container component='main'>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
