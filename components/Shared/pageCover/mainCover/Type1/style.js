import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  /*main container class when header type is colored*/
  coverContainer: {
    position: "relative",
    width: "100%",
    height: "400px",
    marginBottom: "10vh",
  },
  /*main container class when header type is transparent*/
  coverContainerHeaderTransparent: {
    position: "relative",
    width: "100%",
    height: "500px",
    marginBottom: "10vh",
  },
  /*main image class when header type is colored*/
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "400px",
    zIndex: -1,
    objectFit: "cover",
  },
  /*main image class when header type is transparent*/
  imageContainerHeaderTransparent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "500px",
    zIndex: -1,
    objectFit: "cover",
  },
  /** Overlay for the Div behind Image */
  overLayDivBehindImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "#000000d6",
    width: "100%",
    height: "100%",
    zIndex: 0,
    opacity: 0.55,
  },
  /**Breadcrumb link item */
  breadcrumbLinkTitle: {
    cursor: "pointer",
    color: "white",
    "&:hover": { textDecoration: "underline" },
    fontWeight: "bold !important",
  },
  /**Breadcrumb last item */
  breadcrumbLastTitle: {
    color: "white",
    fontWeight: "bold !important",
  },
  /*info container class*/
  infoContainer: {
    maxWidth: "95%",
    zIndex: "3 !important",
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },
  /*info title class*/
  infoTitle: {
    color: "white",
    fontWeight: "500 !important",
  },
  /*info description class*/
  infoDescription: {
    color: "white",
    display: {
      sm: "block",
    },
  },
  /*media query when header type is colored*/
  "@media (min-width: 320px) and (max-width: 599px)": {
    imageContainer: {
      height: "323px",
    },
    coverContainer: {
      height: "323px",
    },
  },
  /*media query when header type is transparent*/
  "@media (min-width: 320px) and (max-width: 599px)": {
    imageContainerHeaderTransparent: {
      height: "423px",
    },
    coverContainerHeaderTransparent: {
      height: "423px",
    },
  },
}));

export default useStyles;
