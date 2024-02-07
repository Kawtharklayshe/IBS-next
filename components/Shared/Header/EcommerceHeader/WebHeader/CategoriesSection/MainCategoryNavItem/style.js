import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: (props) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    padding: "4px 0px !important",
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "1px",
      height: "3px",
      backgroundColor: props.hoverColor,
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s cubic-bezier(0.57, -0.41, 0.69, 1.9)",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    "&:hover:after": {
      visibility: "visible",
      transform: "scaleX(1)",
    },
    "&:hover": {
      "& > p": {
        color: props.hoverColor,
      },
    },
  }),
  // Category image container class
  categoryImageContainer: (props) => ({
    display: "flex",
    borderRadius: "10px 5px",
    margin: "4px !important",
    padding: "6px",
    backgroundColor: props.hoverColor,
  }),

  // Category image class
  categoryImage: {
    filter: "brightness(100)",
    width: "22px",
    height: "22px",
    objectFit: "scale-down",
  },
  // Category Title class
  categoryTitle: {
    color: "#A1A8A8",
  },

  // Popover class
  popover: {
    pointerEvents: "none",
  },
  // Popover content class
  popoverContent: {
    maxHeight: "60vh !important",
    overflowY: "auto",
    pointerEvents: "auto",
    borderRadius: "0px !important",
    padding: "10px",
    width: "100%",
    left: "0px !important",
    maxWidth: "100% !important",
  },
  // Child Column Container class
  childColumnContainer: {
    marginTop: "15px !important",
    padding: "0px 20px",
  },
  // Child name class
  childTitle: {
    margin: "0px 4px !important",
    fontWeight: "500 !important",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  // Child image container class
  childImageContainer: {
    borderRadius: "0px 8px",
    overflow: "hidden",
    height: "100px",
    marginTop: "4px",
  },
  // Child image class
  childImage: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "0px 25px 0px 26px",
  },
}));

export default useStyles;
