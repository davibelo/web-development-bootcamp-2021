// import React from "react";
// import ReactDOM from "react-dom";
import emojipedia from "./emojipedia";

var numbers = [2, 3, 56, 2, 48, 5];
console.log(0, numbers);

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}

// using map method
let newNumbers1 = numbers.map(double);
console.log(1, newNumbers1);

// using ForEach method
let newNumbers2 = [];
numbers.forEach(function (x) {
  let number = double(x);
  newNumbers2.push(number);
});
console.log(2, newNumbers2);

//using map with callback function
const newNumbers3 = numbers.map(function (x) {
  return x * 2;
});
console.log(3, newNumbers3);

//using map with arrow callback function
const newNumbers3a = numbers.map((x) => x * 2);
console.log("3a", newNumbers3a);

//Filter - Create a new array by keeping the items that return true.

// using filter method
const newNumbers4 = numbers.filter(function (number) {
  return number > 10;
});
console.log(4, newNumbers4);

// using filter method with arrow function
const newNumbers4a = numbers.filter((number) => number > 10);
console.log("4a", newNumbers4a);

//using ForEach to filter
let newNumbers5 = [];
numbers.forEach(function (number) {
  if (number > 10) {
    newNumbers5.push(number);
  }
});
console.log(5, newNumbers5);

//Reduce - Accumulate a value by doing something to each item in an array.

// using reduce method
let newNumbers6 = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("number = " + currentNumber);
  return accumulator + currentNumber;
});
console.log(6, newNumbers6);

//using reduce with arrow function
// using reduce method
let newNumbers6a = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log("6a", newNumbers6a);

// using ForEach to reduce
let newNumbers7 = 0;
numbers.forEach(function (currentNumber) {
  newNumbers7 += currentNumber;
});
console.log(7, newNumbers7);

//Find - find the first item that matches from an array.

const newNumbers8 = numbers.find(function (number) {
  return number > 10;
});
console.log(8, newNumbers8);

// using arrow function
const newNumbers8a = numbers.find((number) => number > 10);
console.log("8a", newNumbers8a);

//FindIndex - find the index of the first item that matches.

const newNumbers9 = numbers.findIndex(function (number) {
  return number > 10;
});
console.log(9, newNumbers9);

// using arrow function
const newNumbers9a = numbers.findIndex((number)=> number > 10);
console.log("9a", newNumbers9a);

//Exercise
//Make an array of emojis meaning trunked at 100 characters
function getMeanings(item) {
  return item.meaning.substring(0, 100);
}

const meanings1 = emojipedia.map(getMeanings);
console.log(10, meanings1);

// using map with callback function
const meanings2 = emojipedia.map(function (item) {
  return item.meaning.substring(0, 100);
});
console.log(11, meanings2);

// using map with arrow callback function
const meanings3 = emojipedia.map((item) => item.meaning.substring(0, 100));
console.log(11, meanings3);

// ReactDOM.render(<App />, document.getElementById("root"));
