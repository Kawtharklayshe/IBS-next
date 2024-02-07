import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  //div That has fade-down animation
  root: {
    position: "relative",
  },

  //Main Swiper
  mainSwiper: {
    width: "100%",
    margin: "0px auto",
    color: "inherit",
    position: "relative",
    "& .swiper-button-next": {
      color: `${theme.palette.primary.main} !important`,
    },
    "& .swiper-button-prev": {
      color: `${theme.palette.primary.main} !important`,
    },
    "& .swiper-pagination-bullet": {
      opacity: "1",
      backgroundColor: "#bcbcbc !important",
      width: "10px !important",
      height: "10px !important",
      color: "inherit !important",
    },
    "& .swiper-pagination-bullet-active": {
      opacity: "1",
      color: `${theme.palette.primary.main} !important`,
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
  },

  //Container That has a two sections (Image Sections + Text Sections)
  ContainerForAllSections: {
    color: theme.palette.primary.main,
    height: "420px",
    display: "flex",

    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
    },

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    backgroundColor: theme.palette.card.main,
  },

  //Container For Text Section (left section)
  containerForTextSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    color: theme.palette.card.main,
    padding: "5px 10px",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      height: "50%",
    },

    [theme.breakpoints.up("md")]: {
      width: "50%",
      height: "100%",
    },
  },

  //Title In Text Section
  titleTextSection: {
    color: theme.palette.onCard.dark,
    marginTop: "8px",
    marginBottom: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    display: "-webkit-box !important",
    "-webkit-line-clamp": "2 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
  },

  //Description In Text Section
  descriptionTextSection: {
    color: theme.palette.onCard.main,
    lineHeight: "25px",
    marginTop: "8px",
    marginBottom: "8px",
    maxWidth: "90%",
    fontWeight: "normal",
    display: "-webkit-box !important",
    "-webkit-line-clamp": "3 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
  },

  //Button in Advance Carousel
  btnTextSection: {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
    borderColor: `${theme.palette.primary.main} !important`,
    borderRadius: "15px 0px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: `${theme.palette.onPrimary.main} !important`,
      cursor: "pointer",
    },
  },

  //Container For Image Section (Right section)
  imageContainerSection: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      height: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "65%",
      height: "100%",
    },
    background: theme.palette.card.dark,
  },

  //Image in Image Section (Right Section)
  imageClass: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.card.main,
    objectFit: "cover",
    clipPath:
      theme.direction == "rtl"
        ? "polygon(0% 0, 81% 0%, 99% 100%, 0% 100%)"
        : "polygon(21% 0%, 100% 0%, 100% 100%, 1% 100%)",
    [theme.breakpoints.down("md")]: {
      clipPath: "unset",
    },
  },

  //Arrows Container
  arrowsContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "10",
    padding: "8px",
    display: "flex",
    flexDirection: theme.direction == "rtl" ? "row-reverse" : "row",
    alignItems: "center",

    [theme.breakpoints.up("xs")]: {
      width: "100%",
      justifyContent: "space-between",
    },

    [theme.breakpoints.up("md")]: {
      width: "fit-content",
      justifyContent: "space-around",
    },
  },

  //Left Arrow
  PrevArrow: {
    background: theme.palette.primary.main,
    width: "43px",
    height: "43px",
    cursor: "pointer",
    margin: "0px",
    color: theme.palette.onPrimary.main,
    opacity: "1",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.onPrimary.main,
    },
    [theme.breakpoints.between(320, 900)]: {
      margin: "0px 3px",
      width: "30px",
      height: "30px",
    },
  },

  //Right Arrow
  NextArrow: {
    background: theme.palette.primary.main,
    width: "43px",
    height: "43px",
    transform: "rotate(180deg)",
    cursor: "pointer",
    margin: "0px",
    color: theme.palette.onPrimary.main,
    opacity: "1",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.onPrimary.main,
    },
    [theme.breakpoints.between(320, 900)]: {
      margin: "0px 3px",
      width: "30px",
      height: "30px",
    },
  },

  //Animation

  // Image Box animation class
  imageSectionAnimation: {
    animationName: theme.direction == "rtl" ? "$fadeRight" : "$fadeLeft",
    animationDuration: "1s",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "both",
    animationIterationCount: "1",
  },

  // Text Box animation class
  textSectionAnimation: {
    animationName: theme.direction == "rtl" ? "$fadeLeft" : "$fadeRight",
    animationDuration: "1s",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "both",
    animationIterationCount: "1",
  },

  "@keyframes fadeLeft": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(0%)",
    },
  },
  "@keyframes fadeRight": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(0%)",
    },
  },
}));

export default useStyles;
