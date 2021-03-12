import React from "react";

const fname = "Davi";
const lname = "Belo";
const number = 7;

const today = new Date();
const year = today.getFullYear();

// javascript code to create HTML elements:
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello"
// document.getElementById("root").append(h1);

// reactDOM uses JSX to generate the same result
// so you can use HTML inside javascript file
// it also uses babel to create javascript most basic code
// it means that it works in all previous versions of browsers
// .render(what to create, where to create)

// inside ReactDOM.render, it looks like plain HTML
// but it is not, it is DOM / JSX
// so if you yse <h1 class="heading">
// will occurs some warnings on browser
// it is necessary to use DOM properties and methods
// https://www.w3schools.com/jsref/dom_obj_all.asp


// React Component
function Expressions() {
    return (
        <div>
            <h1>Hello {fname} {lname}!</h1>
            <h1>Hello {fname + " " + lname}!</h1>
            <p>Your lucky number is {Math.floor(Math.random() * number)}</p>        
            <p>Copyright {year}</p>
        </div>
    );
  }
  export default Expressions;
  