import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // modal class
  modal: {
    outline: "none",
    border: "none",
    padding: "15px",
    height: "100vh",
    overflow: "hidden",
  },
  // modal container class
  modalContainer: {
    position: "relative",
    outline: "none",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // inner Container class
  innerContainer: {
    position: "relative",
  },
  // loader class
  loader: {
    position: "absolute",
    width: "50px",
    height: "50px",
    top: "50%",
    left: "50%",
    zIndex: "10",
  },
  // Image class
  imgClass: {
    width: "100%",
    height: "100%",
    opacity: 1,
    [theme.breakpoints.up(599)]: {
      objectFit: "cover",
      height: "100vh",
      width: "100vh",
      opacity: 1,
    },
  },
  // Forward Arrow class
  arrowNext: {
    position: "absolute",
    zIndex: 10,
    color: theme.palette.primary.main,
    top: "50%",
    right: "15px",
    transform: "translateY(-50%)",
    fontSize: "45px",
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.up(599)]: {
      display: "block",
    },
  },
  // Backward Arrow class
  arrowBack: {
    position: "absolute",
    zIndex: 10,
    color: theme.palette.primary.main,
    top: "50%",
    left: "15px",
    transform: "translateY(-50%)",
    fontSize: "45px",
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.up(599)]: {
      display: "block",
    },
  },
  // close button class
  closeButton: {
    position: "absolute",
    zIndex: 10,
    color: theme.palette.primary.main,
    top: "50px",
    right: "10px",
    fontSize: "45px",
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.up(599)]: {
      display: "block",
    },
  },
}));

export default useStyles;
