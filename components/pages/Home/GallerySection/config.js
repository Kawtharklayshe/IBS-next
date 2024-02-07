export const Params = {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 70,
    modifier: 1,
    slideShadows: true,
  },
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
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 5,
    },
    // when window width is >= 1600px
    1600: {
      slidesPerView: 5,
    },
    // when window width is >= 1800px  and 4k screen
    1800: {
      slidesPerView: 5,
    },
  },
};
