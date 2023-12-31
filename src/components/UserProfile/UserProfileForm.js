import React, { useRef, useContext, useState} from 'react';
import AuthContext from '../Store/AuthContext';

import classes from './UserProfileForm.module.css';

const UserProfileForm = () => {
    const authCtx = useContext(AuthContext);

    const inputNameRef = useRef("");
    const inputImageRef = useRef("");

    const profileSubmitHandler = (e) => {
      e.preventDefault();
      const enteredName = inputNameRef.current.value;
      const enteredImage = inputImageRef.current.value;
  
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB9oKh0vg7xF7p2cMslMybT_3tcOmg31bA",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,
            displayName: enteredName,
            photoUrl: enteredImage,
            // deleteAttribute: ["DISPLAY_NAME", "PHOTO_URL"],
            deleteAttribute: [],
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          }
        })
        .then((data) => {
          // authCtx.completeProfile();
          console.log(data);
          alert("profile updated successfully");
        })
        .catch((err) => {
          // console.error(err);
          alert(err.messaqge);
        });
    };

  return (
    <form className={classes.form} onSubmit={profileSubmitHandler}>
      <div className={classes.formHead}>
        <span>Contact Details</span>
      </div>
      <div className={classes.formBody}>
        <label>Full Name:</label>
        <input type='text' ref={inputNameRef} defaultValue={authCtx.displayName}/>
        <label htmlFor="formInput">Profile Photo URL:</label>
        <input type='text' ref={inputImageRef} defaultValue={authCtx.imageUrl}/>
        <div className={classes.button}>
          <button type='submit'>Update</button>
        </div>
      </div>
    </form>
  );
};

export default UserProfileForm;