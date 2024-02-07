import { makeStyles } from "@mui/styles";

// carousel specific styles
export const carouselClasses = {
  indicatorIcon: {
    // indicator icon styles
    fontSize: 14,
  },
  indicatorIconButton: {
    margin: "4px 4px", // 4 px for top,down  and 5 for right,left
    color: "#c4c4c4",
    fontSize: "10px",
  },
  activeIndicatorIconButton: {
    color: "inherit", // it takes its color from Box parent
  },
  indicatorContainer: {
    marginTop: "0px", // 5
    textAlign: "center", // 4
  },
  navButtons: {
    // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
    backgroundColor: "transparent",
    borderRadius: 0,
    color: "inherit",
    top: "50% !important",
    transform: "translateY(-50%)",
    opacity: "1",
  },
  navButtonsWrapper: {
    // Move the buttons to the bottom. Unsetting top here to override default style.
    bottom: "0",
    top: "unset",
  },
  arrowIcon: {
    // Next, Back icon styles
    fontSize: 30,
    color: "inherit",
  },
};

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    color: theme.palette.primary.main,
  },
  // carousel image class
  carouselImage: {
    width: "100%",
    height: "400px",
    position: "relative",
    cursor: "pointer",
    [theme.breakpoints.between(320, 600)]: {
      height: "246px",
    },
  },
}));

export default useStyles;
