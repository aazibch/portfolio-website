const getThemeConfig = (mode) => {
    const palette =
        mode === 'light'
            ? {
                  background: {
                      default: '#FFFFFF'
                  }
              }
            : {};

    const themeConfig = {
        palette: {
            mode: mode,
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
                fontWeight: 500,
                fontSize: '1rem'
            }
        }
    };

    return themeConfig;
};

export default getThemeConfig;
