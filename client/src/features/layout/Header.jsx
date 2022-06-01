import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Container, Menu, MenuItem, styled } from '@mui/material';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const StyledHeader = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderBottom: `1px solid ${theme.palette.grey[400]}`,
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <Container>
        <Stack direction='row' alignItems='center'>
          <Logo />
          <Box component='nav' flexGrow='1'>
            <Stack component='ul' direction='row' alignItems='center' pl='0'>
              <Box component='li'>
                <Link to='/search'>
                  <Button variant='navlink'>Search Articles</Button>
                </Link>
              </Box>
              <Box component='li'>
                <Link to='/about'>
                  <Button variant='navlink'>About</Button>
                </Link>
              </Box>
              <Box component='li'>
                <Link to='/submit'>
                  <Button variant='navlink'>Submit Article</Button>
                </Link>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack direction='row' spacing={2} alignItems='center'>
              <Button variant='navlink' onClick={handleClick}>
                Article Queues
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                  <Link to='/moderationqueue'>Moderation Queue</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to='/analysisqueue'>Analysis Queue</Link>
                </MenuItem>
              </Menu>
              <Link to='/login'>
                <Button variant='outlined'>Login</Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </StyledHeader>
  );
};

export default Header;
