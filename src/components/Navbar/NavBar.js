import classes from './NavBar.module.css'
import { NavLink } from "react-router-dom";
// import logoImage from '../assets/logo.jpg';

const NavBar = () => {
    return (
        <div className={classes.mainNav}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                        to='/home'
                        className={classes.active}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
            <NavLink
              to='/expenses'
              className={classes.active}
            >
              Expenses
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={classes.active}
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/profile'
              className={classes.active}
            >
              User Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              className={classes.active}
            >
              Login
            </NavLink>
          </li>
          <li>
          <div className={classes.button}>
        <button>Logout</button>
      </div>
          </li>
        </ul>
            </nav>
            
        </div>
    )
};

export default NavBar;