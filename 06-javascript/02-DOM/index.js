
alert("Welcome :)")
document.getElementById("title").innerHTML = "GoodBye"
document.querySelector("#title").style.fontSize="5rem"
document.getElementsByClassName("item")[2].innerHTML = "Terceiro"
document.getElementsByClassName("item")[2].style.color="blue"
//document.getElementById("google-link").style.color="green"

//using query selector
document.querySelector("#google-link").style.color="green"
//combine selectors: 
//document.querySelector(".list a").style.color="orange"
//document.querySelector("li a").style.color="red"
document.querySelector("button").style.background="yellow"


//document.querySelector("button").classList.add("invisible")
//document.querySelector("button").classList.remove("invisible")
document.querySelector("button").classList.toggle("invisible")
document.querySelectorAll(".item")[1].classList.toggle("huge")

document.getElementById("title").innerHTML = "<em>GoodBye</em>"
document.getElementById("title").textContent = "GoodBye!!!"

//document.getElementById("google-link").textContent = "Bing"
document.querySelector("#google-link").textContent = "Bing"
document.querySelector("a").setAttribute("href","https://www.bing.com")

// in my experience querySelector was better because worked better with autocompletion on console