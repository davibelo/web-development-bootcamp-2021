// A high order function is a function that calls other functions
document.addEventListener("keydown", respondToKey(event));

// The called function is called Callback function
function respondToKey(event) {
    console.log("key pressed");
}

// You can use callback functions with only 1 step!!
document.addEventListener("keydown",function(event){
    console.log(event)
})

