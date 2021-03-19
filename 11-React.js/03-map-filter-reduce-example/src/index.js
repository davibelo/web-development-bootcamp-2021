// import React from "react";
// import ReactDOM from "react-dom";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}

// using map method
let newNumbers = numbers.map(double);
console.log(newNumbers);

// using ForEach method
let newNumbers2 = [];
numbers.forEach(function (x) {
  let number = double(x);
  newNumbers2.push(number);
});
console.log(newNumbers2);

//using map with anonymous callback function
const newNumbers3 = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers3);

//Filter - Create a new array by keeping the items that return true.

// using filter method
const newNumbers4 = numbers.filter(function (number) {
  return number > 10;
});
console.log(newNumbers4);

//using ForEach to filter
let newNumbers5 = [];
numbers.forEach(function (number){
    if (number > 10){
        newNumbers5.push(number);
    }
});
console.log(newNumbers5);

//Reduce - Accumulate a value by doing something to each item in an array.

// using reduce method
let newNumbers7 = numbers.reduce(function(accumulator,currentNumber){
    console.log("accumulator = " + accumulator);
    console.log("number = " + currentNumber);
    return (accumulator + currentNumber)
});
console.log(newNumbers7);

// using ForEach to reduce
let newNumbers8 = 0;
numbers.forEach(function (currentNumber){
    newNumbers8 += currentNumber;
});
console.log(newNumbers8);

//Find - find the first item that matches from an array.


//FindIndex - find the index of the first item that matches.

// ReactDOM.render(<App />, document.getElementById("root"));
