import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import './App.css';
import HeroSection from './sections/HeroSection/HeroSection';
import Layout from './components/Layout/Layout';
import AboutSection from './sections/AboutSection/AboutSection';

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
                <Layout handleThemeMode={handleThemeMode}>
                    <HeroSection />
                    <AboutSection />
                </Layout>
            </Box>
        </ThemeProvider>
    );
}

export default App;
