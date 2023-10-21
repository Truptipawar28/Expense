import React from "react";
import classes from './UserProfile.module.css';
import UserProfileForm from "./UserProfileForm";

const UserProfile = () => {
    
    return(
        <React.Fragment>
            <div className={classes.profilePage}>
                <span className={classes.welcome}>
                A budget is telling your money where to go instead of wondering where it went.
                </span>
                <span className={classes.profile}>
                    <span>
                    Your profile is <b>64%</b> completed. A complete profile has a
                    higher chance of landing a job.<b>Complete now</b>
                    </span>
                </span>
            </div>
            <UserProfileForm />
        </React.Fragment>
    )
};

export default UserProfile;