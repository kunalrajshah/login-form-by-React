import React,{useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = (props) => {
  // Listen context API like this
  const ctxt=useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctxt.isLogedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctxt.isLogedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctxt.isLogedIn && (
          <li>
            <button onClick={ctxt.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
