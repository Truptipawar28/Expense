import { useContext } from 'react';
import AuthContext from '../Store/AuthContext';

const Home = () => {
    
        const authCtx = useContext(AuthContext);
        const isLoggedIn = authCtx.isLoggedIn;
        return (
            <div>
            {isLoggedIn && <LoginMessage />}
        {/* <h1 className={classes.heading}>Welcome To Expense Tracker</h1> */}
        </div>
    )
};

export default Home;