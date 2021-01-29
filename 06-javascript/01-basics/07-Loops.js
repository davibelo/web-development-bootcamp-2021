// WHILE LOOP
var output = []
var count = 1

function FizzBuzzWHILE() {

    while (count < 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz")
        } else if (count % 3 === 0) {
            output.push("Fizz")
        } else if (count % 5 === 0) {
            output.push("Buzz")
        } else {
            output.push(count)
        }
        count++
    }
    console.log("\nFizzBuzzWHILE => "+ output)
}

FizzBuzzWHILE()

// FOR LOOP

// WHILE LOOP
var output = []

function FizzBuzzFOR() {

    for (count = 1; count < 100; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz")
        } else if (count % 3 === 0) {
            output.push("Fizz")
        } else if (count % 5 === 0) {
            output.push("Buzz")
        } else {
            output.push(count)
        }
    }
    console.log("\nFizzBuzzFOR => "+output)
}

FizzBuzzFOR()
