import classes from './UnderConstructionMessage.module.css';
import ConstructionImage from './construction.svg';

const UnderConstructionMessage = () => {
    return (
        <div className={classes.underConstructionMessage}>
            <img src={ConstructionImage} alt="" />
            <h1>Website is under construction.</h1>
        </div>
    );
};

export default UnderConstructionMessage;
