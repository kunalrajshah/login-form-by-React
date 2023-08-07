import React, { useEffect, useState, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../Input/Input";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // For college
  const [enteredCollegeName, setCollegeName] = useState("");
  const [collegeIsValid, setCollegeIsValid] = useState();

  const collegeNameHandler = (event) => {
    setCollegeName(event.target.value);
  };

  // call useContext
  const ctxt = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const collegeInputRef = useRef();

  // Using useEffrct
  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") &&
        enteredPassword.trim().length > 6 &&
        enteredCollegeName.trim().length >= 2
    );
  }, [enteredEmail, enteredPassword, enteredCollegeName]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateCollegeHandler = () => {
    setCollegeIsValid(enteredCollegeName.trim().length >= 2);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Adding forward refconcept. want to cursor movement automatic
    if (formIsValid) {
      ctxt.onLogin(enteredEmail, enteredPassword);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else if (!passwordIsValid) {
      passwordInputRef.current.focus();
    } else {
      collegeInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* For Email */}
        <Input
          ref={emailInputRef}
          type="email"
          label="E-Mail"
          id="Email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          value={enteredEmail}
          IsValid={emailIsValid}
        />

        {/* For Password */}
        <Input
          ref={passwordInputRef}
          type="password"
          label="Password"
          id="password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          value={enteredPassword}
          IsValid={passwordIsValid}
        />

        {/* For College */}
        <Input
          ref={collegeInputRef}
          type="text"
          label="College Name"
          id="college"
          onChange={collegeNameHandler}
          onBlur={validateCollegeHandler}
          value={enteredCollegeName}
          IsValid={collegeIsValid}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
