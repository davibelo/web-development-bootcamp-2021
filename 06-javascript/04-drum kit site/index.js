// Getting the number of drum buttons on website
var NumberOfDrumButtons = document.querySelectorAll(".drum").length

// Adding event listener on drum buttons
for (var i = 0; i < NumberOfDrumButtons; i++) {
    // the function used is an anonymous function
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // using "this" to get innerHTML the i element
        var buttonInnerHTML = this.innerHTML
        playSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    })
}

// Adding keydown event listener on the DOM
// You can get event information putting event inside the anonymous function
document.addEventListener("keydown", function (event) {
    playSound(event.key)
    buttonAnimation(event.key)
})

// function to get the drum key information and play the correct sound
function playSound(key) {
    // switch statement is like a series of "if" statements
    switch (key) {
        case "w":
            //creating an audio object
            var tom1 = new Audio("sounds/tom-1.mp3")
            //using play method to play the sound
            tom1.play()
            break
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break
        case "l":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break
        default:
            console.log(buttonInnerHTML)
            break
    }
}

// function to animate drum buttons
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    // setTimeout function requires a function as first parameter
    // using an anonymous function as the first parameter
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },300)
}