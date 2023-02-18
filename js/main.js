"use strict";
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");
const dots = document.querySelectorAll(".dot");

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateY(${100 * (i - slide)}%)`;
  });
};
const activateDots = function (slide) {
  dots.forEach((dot) => dot.classList.remove("active"));
  document.querySelector(`.dot[data-slide="${slide}"]`).classList.add("active");
};
//Initialize
activateDots(0);
goToSlide(0);

const nextSLide = function () {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;
  goToSlide(curSlide);
  activateDots(curSlide);
};
//Automatic
const autoSlide = setInterval(nextSLide, 3000);
const prevSlide = function () {
  if (curSlide === 0) curSlide = maxSlide - 1;
  else curSlide--;
  goToSlide(curSlide);
  activateDots(curSlide);
};

//Events
next.addEventListener("click", () => {
  clearInterval(curSlide);
  nextSLide();
});
prev.addEventListener("click", prevSlide);

dotsContainer.addEventListener("click", function (e) {
  const slide = e.target.dataset.slide;
  if (e.target.classList.contains("dot")) {
    activateDots(slide);
    goToSlide(slide);
  }
});

//Small Screens
const media = this.matchMedia("(max-width : 992px)");
if (media.matches) {
  //   reset("translateX");
  const next = document.querySelector(".next-");
  const prev = document.querySelector(".prev-");
  var sliderSmall = function () {
    //Functions
    const goToSlide = function (slide) {
      slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
      });
    };
    const activateDots = function (slide) {
      dots.forEach((dot) => dot.classList.remove("active"));
      document
        .querySelector(`.dot[data-slide="${slide}"]`)
        .classList.add("active");
    };
    //Initialize
    activateDots(0);
    goToSlide(0);

    const nextSLide = function () {
      if (curSlide === maxSlide - 1) curSlide = 0;
      else curSlide++;
      goToSlide(curSlide);
      activateDots(curSlide);
    };
    const prevSlide = function () {
      if (curSlide === 0) curSlide = maxSlide - 1;
      else curSlide--;
      goToSlide(curSlide);
      activateDots(curSlide);
    };

    //Events
    next.addEventListener("click", nextSLide);
    prev.addEventListener("click", prevSlide);

    dotsContainer.addEventListener("click", function (e) {
      const slide = e.target.dataset.slide;
      if (e.target.classList.contains("dot")) {
        activateDots(slide);
        goToSlide(slide);
      }
    });
  };
  sliderSmall();
}
