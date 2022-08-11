import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/logo-armandoweb-agency.png';
import { Link } from "react-scroll";
import { useState } from 'react';
import ButtonColor from '../ChangeColor/ButtonColor';

const pages = ['servicios', 'tecnologias', 'portafolio', 'contacto'];

const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="greydark">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Link to="navbar" spy={true} smooth={true} offset={-70}>
            <Box component="img" sx={{ width: 120, display: { xs: 'none', md: 'flex' } }} src={logo} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="greyligth"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {pages.map((page) => (
                <Link to={page} key={page} spy={true} smooth={true} offset={-70}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}

            </Menu>
            <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
              <ButtonColor />
            </Box>
          </Box>

          <Link to="navbar" spy={true} smooth={true} offset={-70}>
            <Box component="img" sx={{ width: 100, mr: 1, display: { xs: 'flex', md: 'none' } }} src={logo} />
          </Link>

          <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} to={page} spy={true} smooth={true} offset={-70}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            <ButtonColor />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;