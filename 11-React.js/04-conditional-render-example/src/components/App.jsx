import React from "react";
import Login from "./Login";
import Register from "./Register";
import Form from "./Form";

let isRegistered = false;

function App() {
  return (
    <div className="container">
      {/* ternary operator is a expression not a statement*/}
      {/* so it can be used inside jsx */}
      {/* {condition ? expression if true : expression if false} */}
      {isRegistered ? <Login /> : <Register />}
      
      {/* using logic inside component: */}
      <Form isRegistered={isRegistered} />     
      
    </div>
  );
}

export default App;
