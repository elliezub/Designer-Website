let navbar = document.querySelector(".navbar");

window.onscroll = function() {
    scrollFunction()
}
// when you scroll the scroll function is triggered

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
}

//this is for the review slideshow area
// function name changeSlide()


//get the div from the DOM
let slide = document.getElementsByClassName('review-slide'); 
//initialize slide number to 0
let slideNumber = 0;

//loop goes through each slide and hides it 
function visibleSlide(num) {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

slideNumber = num;
if (slideNumber >= slide.length) {slideNumber = 0}
//if the slide number is greater than the total number of slides we will go back to the first slide
if (slideNumber < 0) {slideNumber = slide.length-1}
//this one does the opposite
slide[slideNumber].style.display = "block";
}

function changeSlide(num) {
    visibleSlide(slideNumber += num)
}

window.onload = function() {
    let slideNumber = 0;
    visibleSlide(slideNumber);
}