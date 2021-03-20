// series of instructions packaged in a block of code
// make these instructions easier to reuse

// making function
function ExitDungeon() {
  console.log("go left");
  console.log("go right");
  console.log("go left");
  console.log("step out");
}

// calling function
ExitDungeon();

// making functions with arguments
function BuyMilk(money) {
  console.log("go to supermarket");
  const milk_price = 2.5;
  var num_bottles = money / milk_price;
  num_bottles = Math.floor(num_bottles);
  // other option to convert to integer:
  //num_bottles = num_bottles.toFixed(0)
  console.log("buy " + num_bottles + " bottles of milk");
  console.log("get home");
}
BuyMilk(123);

// making functions with outputs
function BuyMilk(money) {
  console.log("go to supermarket");
  const milk_price = 2.31;
  var num_bottles = money / milk_price;
  num_bottles = Math.floor(num_bottles);
  var change = money % milk_price;
  change = change.toFixed(2);
  console.log("buy " + num_bottles + " bottles of milk");
  console.log("get " + change + " of change");
  console.log("get home");
  return alert(
    "Here are your " +
      num_bottles +
      " bottles of milk" +
      " and your change of $" +
      change
  );
}
BuyMilk(300);

function BMICalc(weight, height) {
  var BMI = weight / height ** 2;
  return Math.round(BMI);
}
BMICalc(74, 1.78);

// dice simulator
function dice(num_faces) {
  var rnd_number = 1 + Math.random() * num_faces;
  return Math.floor(rnd_number);
}
dice(20);

// Higher order functions
// Function that uses others functions
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
// a function calculator that uses other functions as arguments
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

// javascript ES6 arrow functions
// (input) => (output)
const BMICalc = (weight, height) => Math.round(weight / height ** 2);

const DaviBMI = BMICalc(75,1.78)
console.log(DaviBMI);
