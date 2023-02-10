import {
    AppBar,
    Box,
    Button,
    IconButton,
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

const sections = [
    {
        title: 'About',
        anchor: '#about'
    },
    {
        title: 'Portfolio',
        anchor: '#portfolio'
    },
    {
        title: 'Contact',
        anchor: '#contact'
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
            position="sticky"
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
                            fontWeight: 400,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        AazibCh
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
                            {sections.map((section) => (
                                <MenuItem
                                    component="a"
                                    href={section.anchor}
                                    key={section.title}
                                    sx={{ textTransform: 'none' }}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {section.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
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
                        AazibCh
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        {sections.map((section) => (
                            <Button
                                component="a"
                                href={section.anchor}
                                key={section.title}
                                sx={{
                                    my: 2,
                                    color: 'inherit',
                                    display: 'block',
                                    textTransform: 'none',
                                    fontWeight: 400
                                }}
                            >
                                {section.title}
                            </Button>
                        ))}
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
                        <Switch onChange={props.handleThemeMode} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
