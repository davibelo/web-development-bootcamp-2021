import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login() {
  return (
    <form className="form">
      <Input text="text" placeholder="Username" />
      <Input text="Password" placeholder="Password" />
      <Input text="Confirm Password" placeholder="Confirm Password" />
      <Button text="Register" />
    </form>
  );
}

export default Login;
