import React from "react";
import Login from "./Login";
import Register from "./Register";

let isRegistered = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {/* ternary operator is a expression not a statement*/}
      {/* so it can be used inside jsx */}
      {/* {condition ? expression if true : expression if false} */}      
      {isRegistered ? <Login /> : <Register />}

      {/* Conditional using AND operator in react:*/}
      {/* (condition) && (expression if true) */}
      {currentTime > 11 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
