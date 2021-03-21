import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login() {
  return (
    <form className="form">
      <Input text="text" placeholder="Username" />
      <Input text="Password" placeholder="Password" />   
      <Button text="Login"/>
    </form>
  );
}

export default Login;
