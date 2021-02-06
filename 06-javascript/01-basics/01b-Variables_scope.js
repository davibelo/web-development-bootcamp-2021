// scope of variables

// creating variables in global scope
var x = 1;
var y = 2;
// creating a function 
function showSum() {
    // creating variable in local scope
    const z = 3;
    // is possible to use global variables
    // inside a function
    console.log(x + y + z);
}
// local variables are not accessible outside
console.log(z); // error

// ATTENTION!!!
// using "var" inside a loop makes variables
// accessible outside!!!!
if (2 < 3) {
    var x = 1;
    let y = 2
    const z = 3;
    console.log(z)
};
console.log(x); // works!!!
console.log(y); // error!
console.log(z); // error!

// conclusion:
// avoid using "var"
// use "let" instead!