export const Params = {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  navigation: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  speed: 1500,
  coverflowEffect: {
    rotate: 0,
    stretch: 30,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 5,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 1000,
        modifier: 1,
        slideShadows: true,
      },
    },
    // when window width is >= 768px
    600: {
      slidesPerView: 2,
      spaceBetween: 5,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
      coverflowEffect: {
        rotate: 0,
        stretch: 30,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
    },
  },
};
