import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.card.main,
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.07)",
    border: "2px solid transparent",
    height: "420px",
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0px",
      height: "0px",
      top: "-2px",
      left: "-2px",
      bottom: "0px",
      border: "2px solid transparent",
    },
    "&:hover:before": {
      width: "100%",
      height: "100%",
      borderTopColor: "initial",
      borderLeftColor: "initial",
      transition: "all 0.25s ease-out, ease-out 0.25s",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0px",
      height: "0px",
      bottom: "-2px",
      right: "-2px",
      border: "2px solid transparent",
    },
    "&:hover:after": {
      width: "100%",
      height: "100%",
      borderBottomColor: "initial",
      borderRightColor: "initial",
      transition: "all 0.25s ease-out, ease-out 0.25s",
    },
    "&:hover $image": {
      transform: "scale(1.2)",
      transition: "transform 0.4s ease",
    },
    "&:hover $extraCustomButtonClass": {
      animation: "$fadeBottom",
      animationDuration: "0.4s",
      animationTimingFunction: "linear",
      animationFillMode: "forwards",
    },
  },
  // image container class
  imageContainer: {
    width: "100%",
    height: "200px",
    position: "relative",
    overflow: "hidden",
  },
  // image class
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  // title class
  title: {
    color: theme.palette.onCard.dark,
    margin: "8px 0px !important",
    padding: "0px 16px",
    fontWeight: "bold !important",
  },
  // description class
  description: {
    color: theme.palette.onCard.main,
    margin: "15px 0px",
    margin: "0px",
    padding: "0px 16px",
    marginBottom: "8px",
    lineHeight: "1.8 !important",
    // overflow
    display: "-webkit-box !important",
    "-webkit-line-clamp": "4 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden",
  },
  // extra custom styles for button
  extraCustomButtonClass: {
    visibility: "hidden",
    marginTop: "8px !important",
    opacity: 0,
    transform: "translateY(-20px)",
  },

  // animation for button
  "@keyframes fadeBottom": {
    "0%": {
      transform: "translateY(20px)",
      opacity: 0.5,
      visibility: "visible",
    },
    "100%": {
      transform: "translateY(0px)",
      opacity: 1,
      visibility: "visible",
    },
  },
}));

export default useStyles;
