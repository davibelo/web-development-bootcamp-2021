function LoveScore(name1, name2) {
    var score = Math.floor(Math.random() * 100)
    return "Your love score is: " + score + "%"

}
LoveScore("Davi", "Lara")

function LoveMatch(name1, name2) {
    var score = Math.floor(Math.random() * 100)
    if (score > 50) {
        var Match = true
    } else {
        var Match = false
    }
    console.log("Your love score is: " + score + "%")
    return Match
}
LoveMatch("Davi", "Lara")

/* logic operators
&& and
|| or
! not
== equal
!= not equal
=== strict equal
!== not strict equal (...)
For more see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison
*/

function LoveMatch(name1, name2) {
    var score = Math.floor(Math.random() * 100)
    if (score < 20) {
        var Match = "Forget it"
    }
    if (score > 20 && score < 50) {
        var Match = "Almost"
    }
    if (score > 50 && score < 80) {
        var Match = "Go for it"
    }
    if (score > 80) {
        var Match = "Perfect"
    }
    console.log("Your love score is: " + score + "%")
    return Match
}
LoveMatch("Davi", "Lara")

// Leap Year challenger
// my answer
function isLeap(year) {
    if (year % 4 === 0) {
        var leap = "Leap year."
        if (year % 100 === 0) {
            leap = "Not leap year."
            if (year % 400 === 0) {
                leap = "Leap year."
            }
        }
    } else {
        leap = "Not leap year."
    }
    return leap
}

isLeap(2400) // true test example
isLeap(1989) // false test example

// professor answer, more elegant
function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not leap year."
    }
}

isLeap(2400) // true test example
isLeap(1989) // false test example