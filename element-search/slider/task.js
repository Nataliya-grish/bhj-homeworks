const sliderItem = document.querySelectorAll(".slider__item");
const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const sliderDots = document.querySelectorAll(".slider__dot");

let activeSlide = 0;
function sliderChanger(i) {
  [...sliderItem].forEach((item) =>
    item.classList.remove("slider__item_active")
  );
  [...sliderDots].forEach((item) =>
    item.classList.remove("slider__dot_active")
  );
  sliderItem[i].classList.add("slider__item_active");
  sliderDots[i].classList.add("slider__dot_active");
}


prev.onclick = () => {
  if (activeSlide - 1 < 0) {
    activeSlide = sliderItem.length - 1;
  } else {
    activeSlide -= 1;
  }
  sliderChanger(activeSlide);
};
next.onclick = () => {
  sliderChanger(activeSlide);
  if (activeSlide + 1 === sliderItem.length) {
    activeSlide = 0;
  } else {
    activeSlide += 1;
  }
};

sliderDots[activeSlide].classList.add("slider__dot_active");
[...sliderDots].forEach(
  (item, i) =>
    item.onclick = () => {
      sliderChanger(i);
    }
);
