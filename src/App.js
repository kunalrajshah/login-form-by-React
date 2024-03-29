import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctxt = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!ctxt.isLogedIn && <Login />}
        {ctxt.isLogedIn && <Home />}
      </main>
    </>
  );
}

export default App;
