import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // we want it run only once during reloading the page.so we give empty[] dependency.
  // useEffect run always in the last.
  useEffect(() => {
    const storedatafromstorage = localStorage.getItem("isloggedin");
    if (storedatafromstorage === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isloggedin", "true");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isloggedin");
    setIsLoggedIn(false);
  };

  const obj = {
    isLogedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  };

  return (
    <AuthContext.Provider value={obj}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
