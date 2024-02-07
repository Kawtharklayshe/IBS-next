export const params = {
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 1500,
  autoplay: { delay: 3000, disableOnInteraction: true },
  // pagination: {
  //   clickable: true,
  // },
  loop: true,
  //navigation: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // when window width is >= 1600px
    1600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 1800px  and 4k screen
    1800: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};
