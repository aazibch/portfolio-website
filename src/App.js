import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Sections from './components/Sections/Sections';
import getThemeConfig from './theme';

function App() {
    const [themeMode, setThemeMode] = useState('light');
    const [firstRun, setFirstRun] = useState(true);

    useEffect(() => {
        if (firstRun) {
            const theme = localStorage.getItem('themeMode');

            if (!theme) {
                localStorage.setItem('themeMode', themeMode);
            } else {
                setThemeMode(theme);
            }

            setFirstRun(false);
        }

        if (!firstRun) {
            localStorage.setItem('themeMode', themeMode);
        }
    }, [themeMode, firstRun]);

    const siteTheme = createTheme(getThemeConfig(themeMode));

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
                <Layout handleThemeMode={handleThemeMode} themeMode={themeMode}>
                    <Sections />
                </Layout>
            </Box>
        </ThemeProvider>
    );
}

export default App;
