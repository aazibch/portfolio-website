import {
  AppBar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography
} from '@mui/material';
import { Container } from '@mui/system';
import { Menu as MenuIcon } from '@mui/icons-material';
import { DarkMode } from '@mui/icons-material';
import { useState } from 'react';

const navLinks = [
  {
    title: 'About',
    anchor: '#about'
  },
  {
    title: 'Projects',
    anchor: '#projects'
  },
  {
    title: 'Contact',
    anchor: '#contact'
  },
  {
    title: 'Blog',
    anchor: 'https://blog.aazibch.com/',
    external: true
  }
];

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        borderColor: 'divider',
        borderBottomStyle: 'solid',
        borderWidth: '1px'
      }}
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component="a"
            href="#hero"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              mr: 2,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            Aazib Chaudhry
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <IconButton
              size="large"
              aria-label="Menu button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              open={Boolean(anchorElNav)}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              onClose={handleCloseNavMenu}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {navLinks.map((navLink) => (
                <MenuItem
                  component="a"
                  href={navLink.anchor}
                  key={navLink.title}
                  sx={{ textTransform: 'none' }}
                  onClick={handleCloseNavMenu}
                  target={navLink.external ? '_blank' : '_self'}
                >
                  <Typography textAlign="center">{navLink.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            component="a"
            href="#hero"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: 1,
              mr: 2,
              fontWeight: 400,
              display: { xs: 'flex', md: 'none' }
            }}
          >
            Aazib Chaudhry
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {navLinks.map((navLink) => {
              return (
                <Link
                  underline="none"
                  href={navLink.anchor}
                  target={navLink.external ? '_blank' : '_self'}
                  key={navLink.title}
                  sx={{
                    color: 'inherit',
                    textTransform: 'none',
                    fontWeight: 400,
                    m: 1
                  }}
                >
                  {navLink.title}
                </Link>
              );
            })}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <DarkMode sx={{ fontSize: 30, color: 'grey' }} />
            <Switch
              checked={props.themeMode === 'dark'}
              onChange={props.handleThemeMode}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
