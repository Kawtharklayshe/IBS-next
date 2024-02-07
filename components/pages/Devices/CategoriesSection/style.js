import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    paddingTop: "8px",
  },
  // Title class
  title: {
    position: "relative",
    color: theme.palette.onBackground.main,
    margin: "8px 0px !important",
    "&:before": {
      content: '""',
      width: "93px",
      position: "absolute",
      right: theme.direction == "rtl" ? 0 : "unset",
      left: theme.direction == "rtl" ? "unset" : 0,
      bottom: "-10%",
      borderBottom: "2px solid",
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  // Swiper class
  swiperRoot: {
    paddingBottom: "40px",
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
  // Slider class
  slider: {
    padding: "8px 0px",
    height: "300px",
  },
}));

export default useStyles;
