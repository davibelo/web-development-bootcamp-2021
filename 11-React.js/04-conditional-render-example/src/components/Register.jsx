import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input text="text" placeholder="Username" />
      <Input text="Password" placeholder="Password" />
      <Input text="Confirm Password" placeholder="Confirm Password" />
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;
