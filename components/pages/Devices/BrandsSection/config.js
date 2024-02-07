export const Params = {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },
  loop: false,
  navigation: true,
  autoplay: { delay: 5000, disableOnInteraction: true },
  speed: 1500,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 1600px
    1600: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 1800px  and 4k screen
    1800: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};
