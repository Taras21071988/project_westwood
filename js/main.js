const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  slidesPerView: 4,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: {
    sensiviti: 1,
    eventsTarget: ".swiper",
  },
  
  breakpoints: {
    250: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
