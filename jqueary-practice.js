console.log("Welcome to JQueary");

//JS vs JQueary
// by id
let htmlElement = document.getElementById("results");
htmlElement=$("results");
console.log(htmlElement)

//by tag name
let htmlElement2 = document.getElementsByTagName("p");
htmlElement2=$("p");
console.log(htmlElement2)

//by class name
let htmlElement3 = document.getElementsByClassName("bg-tomato");
htmlElement3 = $(".bg-tomato");
console.log(htmlElement3);

//id selectors

let redParagraph = $("#red").css("background", "red").css("color", "white");
console.log("my red paragraph", redParagraph);

let blueParagraph = $("#blue").css("background", "blue").css("color", "white")

// class selector

let paragraphWidthBorder = $(".width-border").css("border", "5px solid black")
paragraphWidthBorder.on("click", function(){
    console.log("clicked");
    $(".width-border").addClass("bg-gray");
})
let tomatoParagraph = $(".bg-tomato").css("background", "tomato").css("color", "white").css("border", "solid, black, 5px").css("border-radius","20px")

// tag selector

let paragraph = $("p");
paragraph.css("cursor", "pointer");


//simple and common function

function register(){
    let testEntry =  $("#testInput").val(); // get and store value
    $("#results").append(`<li>${testEntry}</li>`)
}

// Events
$("#btnRegister").on("click", register);

//simple and common functions
let click1 = $("#btnNew"); 
click1.on("click", function(){
    console.log("clicked")
    $("p").css("border", "3px solid black");
})

