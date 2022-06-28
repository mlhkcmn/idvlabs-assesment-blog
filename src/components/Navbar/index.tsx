import { FC, useState, MouseEvent } from 'react';
import { NavbarAccordionButton, NavbarButton, NavbarTitle } from './styled';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Menu, 
  Container, 
  MenuItem, 
  Grid, 
  Link 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

const ResponsiveAppBar: FC = () => {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', sm: 'flex' } }} />
          <NavbarTitle variant="h5" noWrap sx={{ display: { xs: 'none', sm: 'flex' } }} >
            BLOG |
          </NavbarTitle>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton size="large" color="inherit" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', sm: 'none' } }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavbarAccordionButton href='*'>
                  Homepage
                </NavbarAccordionButton>
              </MenuItem>
              {localStorage.getItem('userId') && localStorage.getItem('userName') ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavbarAccordionButton href='/my-posts'>
                    My Posts
                  </NavbarAccordionButton>
                </MenuItem>
              ) : null}
              <MenuItem onClick={handleCloseNavMenu}>
                <NavbarAccordionButton href='/login'>
                  Login
                </NavbarAccordionButton>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavbarAccordionButton href='/register'>
                  Register
                </NavbarAccordionButton>
              </MenuItem>
            </Menu>
          </Box>
          <Grid container columnSpacing={1} direction="row" alignItems="center" justifyContent="flex-end">
            <NavbarTitle variant="h5" noWrap sx={{ display: { xs: 'flex', sm: 'none' } }} >
              BLOG
            </NavbarTitle>
            <Grid item >
              <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                <Link href='*'>
                  <NavbarButton>
                    Homepage
                  </NavbarButton>
                </Link>
              </Box>
            </Grid>
            {localStorage.getItem('userId') && localStorage.getItem('userName') ? (
              <Grid item >
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                  <Link href='my-posts'>
                    <NavbarButton>
                      My Posts
                    </NavbarButton>
                  </Link>
                </Box>
              </Grid>
            ) : null}
            {localStorage.getItem('userId') && localStorage.getItem('userName') ? (
              <Grid item >
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                  <Link href='login'>
                    <NavbarButton onClick={() => window.localStorage.clear()}>
                      Logout
                    </NavbarButton>
                  </Link>
                </Box>
              </Grid>
            ) : (
              <>
                <Grid item >
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                    <Link href='login'>
                      <NavbarButton>
                        Login
                      </NavbarButton>
                    </Link>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                    <Link href='register'>
                      <NavbarButton>
                        Register
                      </NavbarButton>
                    </Link>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default ResponsiveAppBar;
