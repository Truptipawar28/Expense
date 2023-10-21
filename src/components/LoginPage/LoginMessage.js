import React from "react";
import { Link } from "react-router-dom";
import classes from './LoginMessage.module.css'

const LoginMessage = () => {
    return(
        <React.Fragment>
            <div className={classes.mainProfile}>
                <span className={classes.welcome}>
                Welcome to Expense Tracker...!!!
                </span>
                <span className={classes.profile}>
                    <span>Your profile is incomplete.</span>
                    <Link to='/profile'>
                        <b>Complete now</b>
                    </Link>
                </span>
            </div>
        </React.Fragment>
    )
};

export default LoginMessage;