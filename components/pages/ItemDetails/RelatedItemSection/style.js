import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {},
  // title class
  title: {
    color: theme.palette.primary.main,
    position: "relative",
    marginBottom: "16px",
    "&:before": {
      content: '""',
      width: "112px",
      position: "absolute",
      right: theme.direction == "rtl" ? 0 : "unset",
      left: theme.direction == "rtl" ? "unset" : 0,
      bottom: 0,
      borderBottom: "2px solid",
      borderColor: theme.palette.primary.main,
    },
  },
  // Swiper section container class
  swiperSectionContainer: {
    display: "block",
    margin: "8px 0px",
    [theme.breakpoints.down(599)]: {
      display: "none",
    },
  },
  // Swiper main class
  swiperClass: {
    paddingBottom: "30px",
  },
  // Mobile section container
  mobileSectionContainer: {
    display: "block",
    [theme.breakpoints.up(600)]: {
      display: "none",
    },
    padding: "0px 8px",
  },
  // mobile section item container calss
  mobileItemContainer: {
    padding: "8px",
    marginBottom: "16px !important",
  },
}));

export default useStyles;
