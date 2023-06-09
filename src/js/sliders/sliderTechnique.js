import { toggleSmth } from "..";

let swiperTech = null;
const mediaQuery768px = window.matchMedia("(max-width: 768px)");
const paginationTechBox = document.querySelector(".technique-slider__box .swiper-pagination");

const sliderTech = document.querySelector('.technique-slider__box');
const sliderTechWrapper = sliderTech.querySelector('.technique-slider__wrapper');
const showMoreBoxTech = document.querySelector('.technique-slider__show-more');
const showMoreTech = showMoreBoxTech.querySelector('.technique-slider__show-more-button');

document.addEventListener('DOMContentLoaded', function () {
  if (mediaQuery768px.matches) {
    swiperTechInit();
  }
  else {
    paginationTechBox.classList.toggle('_off');
  }

  function swiperTechInit() {
    swiperTech = new Swiper(".technique-slider__box", {
      spaceBetween: 16,
      loop: true,
      slidesPerView: 'auto',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  function sliderTechToggle(isMobileSize) {
    paginationTechBox.classList.toggle('_off');
    if (isMobileSize && !swiperTech) {
      swiperTechInit();
    } else if (!isMobileSize && swiperTech) {
      swiperTech.destroy();
      swiperTech = null;
    }
  }

  showMoreTech.addEventListener('click', () => toggleSmth(sliderTech, 'brand-slider-full', showMoreTech, 'Показать все'));

  mediaQuery768px.addEventListener('change', function resizeWidth(event) {
    sliderTechToggle(event.matches);
  })
});
