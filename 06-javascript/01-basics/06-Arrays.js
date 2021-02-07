// arrays on javascript

guest_list = ["Davi", "Lara", "Camila",
    "Ricardo", "Bárbara", "Alício", "Melissa"
]
console.log(guest_list)

// indexing an element
console.log(guest_list[2])

// method length
console.log(guest_list.length)

// method to verify if something is included in the array
console.log(guest_list.includes("Olavo"))
console.log(guest_list.includes("Lara"))

// adding elements to arrays
guest_list.push("Daniel")
console.log(guest_list)

// removing last item of an array
guest_list.pop()
console.log(guest_list)

// example of code to verify a name in guest list
// run on a browser
guest_list = ["Davi", "Lara", "Camila",
    "Ricardo", "Bárbara", "Alício", "Melissa"
]
guest_name = prompt("What is your name?")
if (guest_list.includes(guest_name)) {
    alert("Welcome to the Party")
} else {
    alert("Sorry, you are not invited")
}

// example of problem solving with arrays
// Fizz Buzz play
// run on console browser calling FizzBuzz() a numerous of times 

var output = []
var count = 1

function FizzBuzz() {
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
    console.log(output)
}


// Who is buying lunch
// run code on console

names = ["Angela", "Ben", "Jenny", "Michael", "Cloe"]

function WhoIsPaying(names) {
    var who_index = Math.floor(Math.random() * names.length)
    return names[who_index] + ' is going to buy lunch today!'
}

WhoIsPaying(names)

// const array cannot be re-assigned to a different array
// but push method can be used to add items