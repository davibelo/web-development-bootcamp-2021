$("h1").addClass("big-title")
$("h1").html("<em>Title</em")
//$("h1").text("Title")

$("a").attr("href", "http://www.yahoo.com.br")

$("h1").click(function(){
    $("h1").css("color","red")
})

$("button").click(function(){
    $("h1").css("color","purple")
})

$("#text-input").keypress(function(event){
    console.log(event.key)
})

$(document).keypress(function(event){
    $("h1").text(event.key)
})

$("h1").on("mouseover",function(){
    $("h1").css("color","black")
    $("h1").animate({opacity:1})
})

$("button").on("click", function(){
    $("h1").animate({opacity:0.25})
})



