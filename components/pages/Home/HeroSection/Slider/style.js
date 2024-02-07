import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    width: "100%",
    // height:
    //   props.headerType == props.headerTypes.colored
    //     ? `${props.heroHeight}px`
    //     : "100vh",
    position:
      props.headerType == props.headerTypes.colored ? "relative" : "unset",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
  }),
  // Swipper class
  swiper: {
    width: "100% !important",
    height: "100%",
  },
  // Slide class
  slide: {
    position: "relative",
    width: "100% !important",
    height: "100%",
  },
  // Slide Image class
  slideImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  // Slide overlay class
  slideOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    backgroundColor: "#00000082",
    opacity: "0.55",
    zIndex: "-1",
  },
  // Details container class
  detailsContainer: {
    maxWidth: "95%",
    height: "100%",
  },
  // Details inner container class
  DetailsInnerContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  // Animation class
  detailsAnimation: {
    animation: "$move",
    animationDuration: "1s",
    animationDelay: "1.5s",
    animationTimingFunction: "ease-in-out",
    opacity: "0",
    animationFillMode: "forwards",
  },
  // Title class
  title: {
    textTransform: "capitalize",
    color: theme.palette.onPrimary.main,
    display: "-webkit-box !important",
    "-webkit-line-clamp": "1 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
    zIndex: 4,
  },
  // SubTitle class
  subTitle: {
    color: theme.palette.onPrimary.main,
    fontStyle: "normal",
    margin: "16px 0px !important",
    maxWidth: "75%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    display: "-webkit-box !important",
    "-webkit-line-clamp": "1 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
    zIndex: 4,
  },
  // Button class
  button: {
    backgroundColor: `${theme.palette.background.main} !important`,
    padding: "8px !important",
    "&:hover": {
      color: `${theme.palette.onPrimary.main} !important`,
      backgroundColor: `${theme.palette.primary.main} !important`,
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  // Animation
  "@keyframes move": {
    "0%": {
      opacity: "0",
      transform: "translateY(100px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0px)",
    },
  },
}));

export default useStyles;
