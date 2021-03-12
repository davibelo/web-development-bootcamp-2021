//jshint esversion:6
import React from "react";

const fname = "Davi";
const lname = "Belo";
const number = 7;

const today = new Date();
const year = today.getFullYear();

// React Component
function Expressions() {
  return (
    <div>
      <h1>
        Hello {fname} {lname}!
      </h1>
      <h1>Hello {fname + " " + lname}!</h1>
      <p>Your lucky number is {Math.floor(Math.random() * number)}</p>
      <p>Copyright {year}</p>
    </div>
  );
}
export default Expressions;
