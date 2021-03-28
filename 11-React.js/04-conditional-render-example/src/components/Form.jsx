import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <Input text="text" placeholder="Username" />
      <Input text="Password" placeholder="Password" />
      {/* Conditional using AND operator in react:*/}
      {/* (condition) && (expression if true) */}
      {/* explanation:*/}
      {/* expression side will always be evaluated as true */}
      {/* if condition side is true, the expression will be passed as result */}
      {!props.isRegistered && (
        <Input text="Confirm Password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
