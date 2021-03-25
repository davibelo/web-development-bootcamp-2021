import React from "react";
import Login from "./Login";
import Register from "./Register";
import Form from "./Form";

let isRegistered = false;

function App() {
  return (
    <div className="container">
      <h1>Example 1</h1>
      <p>Using ternary operator on App.jsx</p>
      {/* ternary operator is a expression not a statement*/}
      {/* so it can be used inside jsx */}
      {/* {condition ? expression if true : expression if false} */}
      {isRegistered ? <Login /> : <Register />}

      <h1>Example 2</h1>
      <p>Using logic inside component</p>
      <Form isRegistered={isRegistered} />
    </div>
  );
}

export default App;
