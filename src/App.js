import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // we want it run only once during reloading the page.so we give empty[] dependency.
  // useEffect run always in the last.
  useEffect(()=>{
    const storedatafromstorage=localStorage.getItem('isloggedin');
    if(storedatafromstorage ==='true'){
      setIsLoggedIn(true);
    }
  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isloggedin','true');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isloggedin');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
