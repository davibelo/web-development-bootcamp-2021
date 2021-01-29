// Object in javascript
var person1 = {
    name: "Timmy",
    age: 25,
    languages: ["english", "portuguese"]
}

var person2 = {
    name: "Jimmy",
    age: 27,
    languages: ["english", "spanish"]
}

console.log(person1.name)
console.log(person1.languages)
console.log(person2.name)
console.log(person2.languages)

// Constructor Function
// A function that create objects
// An object factory
function Person(name, age, languages) {
    this.name = name
    this.age = age
    this.languages = languages
}
var person3 = new Person("Bob", 23, ["english", "german"])
console.log(person3)

// Object with a function attached (= method)
var BellBoy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["eng", "fra", "por"]
    //using an anonymous function to make a method
    moveSuitcase: function () {
        alert("May I take your suitcase?")
        pickUpSuitCase()
        move()
    }
}
// Calling a method:
BellBoy1.moveSuitcase()

// Constructor function
function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name
    this.age = age
    this.hasWorkPermit = hasWorkPermit
    this.languages = languages
    this.moveSuitcase = function(){
        alert("May I take your suitcase?")
        pickUpSuitCase()
        move()
    }
}
// Using constructor function
var BellBoy2 = new BellBoy("Jimmy",20,false, ["eng","spa"])
