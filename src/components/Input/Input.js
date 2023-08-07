import React, { useRef, useImperativeHandle } from "react";
import classes from "../Input/Input.module.css";
import { act } from "react-dom/test-utils";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // it take two argument one is ref another is fnction which return an object.
  useImperativeHandle(ref, () => {
    return { focus: activate };
  });

  return (
    <div
      className={`${classes.control} ${
        props.IsValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
