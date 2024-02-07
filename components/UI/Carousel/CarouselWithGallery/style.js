import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    color: theme.palette.primary.main,
    position: "relative",
  },
  // prev arrow container class
  prevArrowContainer: {
    position: "absolute",
    top: "35%",
    left: "-10px",
    zIndex: 2,
    cursor: "pointer",
    padding: "8px",
    border: "1px solid",
    transform: "translate(0%, -35%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    visibility: "hidden",
    [theme.breakpoints.up(499)]: {
      visibility: "visible",
    },
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.onPrimary.main,
      backgroundColor: theme.palette.primary.main,
      border: "none",
    },
  },
  // prev arrow icon class
  prevArrow: {
    transform: "rotate(180deg) translate(1px, 0px)",
  },
  // Next Arrow container class
  nextArrowContainer: {
    position: "absolute",
    top: "35%",
    right: "-10px",
    zIndex: 2,
    cursor: "pointer",
    padding: "8px",
    border: "1px solid",
    transform: "translate(0%, -35%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    visibility: "hidden",
    [theme.breakpoints.up(499)]: {
      visibility: "visible",
    },
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.onPrimary.main,
      backgroundColor: theme.palette.primary.main,
      border: "none",
    },
  },

  // Slide class
  slide: {
    width: "100%",
    height: "400px",
    [theme.breakpoints.between(320, 900)]: {
      height: "277px",
    },
  },
  // Slide image class
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  // thumbs swiper section
  // thumbs swiper container class
  thumbsSwiperContainer: {
    maxWidth: "100%",
    marginTop: "10px",
  },
  // thumbs swiper class
  thumbsSwiper: {
    color: theme.palette.primary.main,
  },
  // thumb image class
  thumbImage: {
    width: "100%;",
    height: "100px",
    opacity: 0.5,
    objectFit: "cover",
    objectPosition: "center",
  },
}));

export default useStyles;
