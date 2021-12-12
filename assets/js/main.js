const menuBtn = document.getElementById('menu-btn');
const logo = document.querySelector('.logo');
const menuIcon = document.querySelector('.hamburger-icon');
// const nav = document.getElementById('nav');
const nav = document.getElementsByTagName('nav')[0];
const headerMenu = document.querySelector('.header-menu')

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.setAttribute('src', 'assets/img/icon-close.svg');

        menuIcon.classList.add('js-fixed-menu');
        headerMenu.classList.add('js-move-right');
        nav.classList.add('js-navbar__nav');
        menuOpen = true;
    } else {
        menuBtn.setAttribute('src', 'assets/img/icon-hamburger.svg');
        menuIcon.classList.remove('js-fixed-menu');
        nav.classList.remove('js-navbar__nav');
        menuOpen = false;
    }
});

//Current Projects
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide__item");
    var dots = document.getElementsByClassName("slide__dot__items");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//Contact Form
const inputs = document.getElementsByClassName('form-control');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function (event){
    this.nextElementSibling.classList.add("active")
  }); 
  inputs[i].addEventListener("focusout", function(event) {
  if (this.value === "") {
   this.nextElementSibling.classList.remove("active");
  }})
}