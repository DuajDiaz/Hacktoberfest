const searchButton = document.getElementById('search-btn');
const searchBar = document.querySelector('.search-bar-container');
const menu = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');

window.onscroll = () =>{
  searchBar.classList.remove('active');
  navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
  navbar.classList.toggle('active');
});

searchButton.addEventListener('click', () =>{
  searchButton.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

let video = document.getElementById("video-slider");
let btn = document.getElementById("video");

video.volume= 0.5;



// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  // Get current scroll position
  var scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    sectionId = current.getAttribute("id");
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight){

      document.querySelector(".navbarElement[href*=" + sectionId + "]").classList.add("highlight");
    } else {
      document.querySelector(".navbarElement[href*=" + sectionId + "]").classList.remove("highlight");

    }
  });
}


// video play-pause function

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// mute function

document.getElementById('un-mute');
function enableMute() {
  video.muted = true;
}

function disableMute() {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;

  }
}

// gallery slide show functions

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}



// back to top Button functions

var jumpTopButton = document.getElementById("jumpButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){

  if(document.body.scrollTop > 100  || document.documentElement.scrollTop > 100){

    jumpTopButton.style.display = "block";

  }else{

    jumpTopButton.style.display = "none";

  }
}

function scrolltoTop(){

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}
