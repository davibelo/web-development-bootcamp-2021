// run each part of code below on a browser console!!!

// concatenate strings
var message = "Hello"
var name = "Davi"
console.log(message + " " + name)

// retrieving number of characters on a string
var name = "Davi"
console.log(name.length)

// twitter alike example to characters counting
var tweet_input = prompt("What is your message: ")
const tweet_max_length = 10
var tweet_count = tweet_input.length
var tweet_left = tweet_max_length - tweet_count
var tweet_count_msg = "you have written " + tweet_count + ", you have " + tweet_left + " characters left"
alert(tweet_count_msg)

// slicing strings
// string_name.slice(initial position, final position)
var tweet_output = tweet_input.slice(0, tweet_max_length)
alert("your tweet is: " + tweet_output)

//changing casing
var name = prompt("What is your first name?")
var name_initial = name.slice(0,1)
var rest_of_name = name.slice(1,name.length)
name = name_initial.toUpperCase() + name.toLowerCase()
alert("Your name is: " + name)