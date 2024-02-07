import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    width: "100%",
    height:
      props.headerType == props.headerTypes.colored
        ? `${props.heroHeight}px`
        : "100vh",
    position:
      props.headerType == props.headerTypes.colored ? "relative" : "unset",
    zIndex: 1,
  }),
  // Image class
  parallexRoot: {
    scrollBehavior: "smooth",
    height: "100%",
    "& .react-parallax-content": {
      height: "100%",
    },
  },
  // Image overlay class
  imageOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    backgroundColor: "#00000082",
    opacity: "0.55",
    zIndex: "0",
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
  // Title class
  title: {
    fontWeight: "500 !important",
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
    margin: "16px 0px !important",
    maxWidth: "75%",
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
    "&:hover": {
      color: `${theme.palette.onPrimary.main} !important`,
      backgroundColor: `${theme.palette.primary.main} !important`,
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
}));

export default useStyles;
