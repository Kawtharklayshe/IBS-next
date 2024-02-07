import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    position: "relative",
    width: "100%",
    "&:hover": {
      "& $imageOverlay": {
        opacity: 1,
        alignItems: "center",
        transition: "opacity 0.3s linear",
        "& $zoomInIcon": {
          transform: "translateY(0%)",
          opacity: 1,
          transition: "transform 0.5s linear, opacity 0.5s linear",
        },
      },
    },
  },
  // Image main container
  imageMainContainer: {
    width: "100%",
    height: "250px",
    position: "relative",
  },
  // Image class
  imageClass: {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    objectFit: "cover",
  },
  // Image overlay class
  imageOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(35, 35, 35, 0.5)",
    opacity: 0,
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
  },
  // Zoom in icon class
  zoomInIcon: {
    width: "40px !important",
    height: "40px !important",
    cursor: "pointer",
    color: "#ffffff",
    opacity: 0,
    transform: "translateY(70%)",
  },
}));

export default useStyles;
