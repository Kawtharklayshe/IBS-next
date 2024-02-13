export const partnersParams = (length) => {
  return {
    slidesPerView: length < 3 ? length : 3,
    spaceBetween: 0,
    // pagination: {
    //   clickable: true,
    // },
    loop: true,
    navigation: true,
  };
};
