import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
  allCategoriesContainer: (props) => ({
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
      backgroundColor: theme.palette.primary.main,
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
        color: theme.palette.primary.main,
      },
      "& > svg": {
        color: theme.palette.primary.main,
      },
    },
  }),
  // Category Title class
  allCategoriesTitle: {
    color: "#A1A8A8",
  },
  // List Icon class
  listIcon: {
    margin: "4px !important",
    fontSize: "32px !important",
    color: "#A1A8A8",
  },
}));

export default useStyles;
