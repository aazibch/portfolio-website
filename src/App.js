import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Sections from './components/Sections/Sections';

function App() {
    const [themeMode, setThemeMode] = useState('light');

    const palette =
        themeMode === 'light'
            ? {
                  background: {
                      default: '#FFFFFF'
                  }
              }
            : {};

    const siteTheme = createTheme({
        palette: {
            mode: themeMode,
            ...palette
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1320,
                xl: 1536
            }
        },
        typography: {
            h1: {
                fontWeight: 400,
                fontSize: '2.5rem'
            },
            h2: {
                fontWeight: 400,
                fontSize: '2rem'
            },
            h3: {
                fontWeight: 400,
                fontSize: '1.75rem'
            },
            h4: {
                fontWeight: 400,
                fontSize: '1.5rem'
            },
            h5: {
                fontWeight: 400,
                fontSize: '1.25rem'
            },
            h6: {
                fontWeight: 400,
                fontSize: '1rem'
            }
        }
    });

    const handleThemeMode = () => {
        setThemeMode((prevThemeMode) => {
            if (prevThemeMode === 'dark') {
                return 'light';
            }

            if (prevThemeMode === 'light') {
                return 'dark';
            }
        });
    };

    return (
        <ThemeProvider theme={siteTheme}>
            <Box bgcolor="background.default">
                <Layout handleThemeMode={handleThemeMode}>
                    <Sections />
                </Layout>
            </Box>
        </ThemeProvider>
    );
}

export default App;
