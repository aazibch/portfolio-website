import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';

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
                <Layout handleThemeMode={handleThemeMode}></Layout>;
            </Box>
        </ThemeProvider>
    );
}

export default App;
