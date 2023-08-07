import {createContext,useState,useEffect} from "react";

const AuthContext=createContext({
  // These all are dummy data. u can leave this also
  isLogedIn: false,
  onLogout:()=>{},
  onLogin:(email,password)=>{}
});

export const AuthContextProvider=(props)=>{
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

  return (
    <AuthContext.Provider
    value={{
      isLogedIn: isLoggedIn,
      onLogout:logoutHandler,
      onLogin:loginHandler
    }}
  >
    {props.children}
  </AuthContext.Provider>
  );
}

export default AuthContext;