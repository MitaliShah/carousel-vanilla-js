"use strict";

const slides = document.querySelectorAll(".carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
const prevButton = document.querySelector("#carousel-button-prev");
const nextButton = document.querySelector("#carousel-button-next");

function moveToPrevSlide() {
  console.log("moveToPrevSlide");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

prevButton.addEventListener("click", moveToPrevSlide);

nextButton.addEventListener("click", moveToNextSlide);
