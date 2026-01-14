// Typed.js initialization
var typed = new Typed(".auto-type", {
    strings: ["Designer", "Programmer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Navbar toggle
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
    
}

// Image click changer
let currentIndex = 0;
const images = ["images/ST.webp", "images/ST1.webp", "images/ST2.webp", "images/ST3.webp", "images/ST4.webp"];

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("imgClickAndChange").src = images[currentIndex];
}

// Slideshow
let slideIndex = 0;
let timer = null;
let isPaused = false;

function showSlides() {
    if (isPaused) return;

    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    timer = setTimeout(showSlides, 4000);
}

function pauseSlideshow() {
    isPaused = true;
    clearTimeout(timer);
}

function resumeSlideshow() {
    if (!isPaused) return;
    isPaused = false;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

showSlides();

// Scroll to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Contact form submit
const form = document.querySelector(".contact-form");
const submitBtn = form.querySelector(".submit-btn");

form.addEventListener("submit", (e) => {
    setTimeout(() => {
        form.reset();
        submitBtn.classList.add("sent");
        submitBtn.textContent = "Message Sent!";

        submitBtn.disabled = true;
        setTimeout(() => {
            submitBtn.classList.remove("sent");
            submitBtn.textContent = "Send Message";
            submitBtn.disabled = false;
        }, 4000); 
    }, 500);
});
