import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    display: "flex",
    height: "45px",
    background: "#FCEEF1",
    opacity: 0.54,
  },

  sliderContainer: {
    width: "90%",
    height: "100%",
  },

  closeBtnContainer: {
    minWidth: "35px",
    width: "10%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    opacity: 1,

    "& svg": {
      height: "100%",
      cursor: "pointer",
      color: theme.palette.primary.main,
      transform: "scale(1)",
      transition: "all 0.3s",

      "&:hover": {
        transform: "scale(1.2)",
      },
    },
  },

  animateRoot: {
    height: "45px",
    transform: "translate(0, 0)",
    opacity: 1,
    animation: "$animateNotification 0.4s ease-out 1",
    animationFillMode: "forwards",

    "& *": {
      height: "100%!important",
    },
  },

  "@keyframes animateNotification": {
    "0%": {
      height: "45px",
      transform: "translate(0, 0)",
      opacity: 1,
    },

    "95%": {
      transform: "translate(0, -100%)",
      opacity: 0,
    },

    "100%": {
      transform: "translate(0, -120%)",
      height: 0,
    },
  },
}));

export default useStyles;
