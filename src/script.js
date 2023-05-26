let navbar = document.querySelector(".navbar");

window.onscroll = function () {
  scrollFunction();
};
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
let slide = document.getElementsByClassName("review-slide");
//initialize slide number to 0
let slideNumber = 0;

//loop goes through each slide and hides it
function visibleSlide(num) {
  if (slide.length === 0) {
    //check if there are any slides on the page
    return; //if not return immediately
  }

  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  slideNumber = num;
  if (slideNumber >= slide.length) {
    slideNumber = 0;
  }
  //if the slide number is greater than the total number of slides we will go back to the first slide
  if (slideNumber < 0) {
    slideNumber = slide.length - 1;
  }
  //this one does the opposite
  slide[slideNumber].style.display = "block";
}

function changeSlide(num) {
  visibleSlide((slideNumber += num));
}

window.addEventListener("DOMContentLoaded", (event) => {
  let slideNumber = 0;
  visibleSlide(slideNumber);
});

//center the accolades section on nav bar click

const accoladesLink = document.querySelector(".accoladesnavlink");
const container = accolades.getBoundingClientRect();
const accoladesPosition = container.top + window.scrollY;
const middlePosition = accoladesPosition - window.innerHeight / 4;

if (accoladesLink) {
  accoladesLink.addEventListener("click", (event) => {
    const accolades = document.getElementById("accolades");

    if (accolades) {
      event.preventDefault();
      window.scrollTo({ top: middlePosition, behavior: "smooth" });
    }
  });
}

// MODAL LIGHT BOX LOOK BOOK

let myModal = document.getElementById("modal-slideshow");
let slides = document.getElementsByClassName("lookbookSlides");

//open slideshow
function openSlideshow() {
  myModal.style.display = "block";
}

//close slideshow
function closeSlideshow() {
  myModal.style.display = "none";
}

// written first to initialize the slideIndex variable and to call the function on the first load of the page
let slideIndex = 0;
showSlides(slideIndex);

// next prev
function plusSlides(num) {
  showSlides((slideIndex += num));
}

function showSlides(num) {
  if (num > slides.length) {
    slideIndex = 0;
  } else if (num < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = num;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// open slideshow from the image that gets clicked
function addClickHandler(element, index) {
  element.onclick = function () {
    slideIndex = index;
    openSlideshow();
    showSlides(slideIndex);
  };
}

let imgElements = document.getElementsByClassName("photo");

for (let i = 0; i < imgElements.length; i++) {
  addClickHandler(imgElements[i], i);
}
