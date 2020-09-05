"use strict";

const slides = document.querySelectorAll(".carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
const prevButton = document.querySelector("#carousel-button-prev");
const nextButton = document.querySelector("#carousel-button-next");

prevButton.addEventListener("click", moveToPrevSlide);

nextButton.addEventListener("click", moveToNextSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

function moveToPrevSlide() {
  console.log("moveToPrevSlide");
}

function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}
