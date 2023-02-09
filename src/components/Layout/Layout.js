import Header from './Header';

const Layout = (props) => {
    return (
        <>
            <Header handleThemeMode={props.handleThemeMode} />
            {props.children}
        </>
    );
};

export default Layout;
