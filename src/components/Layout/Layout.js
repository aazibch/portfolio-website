import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
    return (
        <>
            <Header
                handleThemeMode={props.handleThemeMode}
                themeMode={props.themeMode}
            />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
