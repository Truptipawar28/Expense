import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import classes from './LoginPage.module.css';
import AuthContext from '../Store/AuthContext';
import LoginMessage from './LoginMessage';

const LoginPage = () => {
    const [haveAccount, setHaveAccount] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
  
    const authCtx = useContext(AuthContext);
  
    const switchAuthModeHandler = () => {
      setHaveAccount((preState) => {
        return !preState;
      });
    };
  
    let url;
  
    if (haveAccount) {
      url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9oKh0vg7xF7p2cMslMybT_3tcOmg31bA';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9oKh0vg7xF7p2cMslMybT_3tcOmg31bA';
    }
  
    const submitHandler = (event) => {
      event.preventDefault();
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
  
      if (!haveAccount) {
        if (passwordInputRef.current.value !== confirmPasswordInputRef.current.value) {
          return alert('password and confirm password are not same');
        }
      }
  
      fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(async(response) => {
            if (response.ok) {
              return response.json();
            } else {
            //   return response.json().then((data) => {
                let errorMesssage = "Authentication Failed";
    
                throw new Error(errorMesssage);
            
            }
          })
          .then((data) => {
            authCtx.login(data.idToken);
            console.log(data.idToken);
            console.log("user has successfully signed up");
          })
          .catch((err) => {
            alert(err.message);
          });
    };

    if (authCtx.isLoggedIn) {
        return <LoginMessage />;
      }
  

  return (
    <div className={classes.wrapper}>
      <h1>{haveAccount ? 'Login' : 'Sign Up'}</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email -</label>
          <input id="email" type="email" placeholder="Email" ref={emailInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Password -</label>
          <input id="password" type="password" placeholder="Enter Password" ref={passwordInputRef} />
        </div>

        {!haveAccount && (
          <div className={classes.control}>
            <label htmlFor="confirm-password">Confirm Password -</label>
            <input id="confirm-password" type="password" placeholder="Confirm Password" ref={confirmPasswordInputRef} />
          </div>
        )}

        <button type="submit">{haveAccount ? 'Login' : 'Create Account'}</button>

        {haveAccount ? <Link to="/forget-password">Forget password</Link> : null}

        <div className={classes.action}>
          <button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
            {haveAccount ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
