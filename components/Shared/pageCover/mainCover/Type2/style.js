import { makeStyles } from "@mui/styles";
import { headerTypes } from "../../../../../constants/enums";

const useStyles = makeStyles((theme) => ({
  // Container That has all content
  coverContainer: (props) => ({
    position: "relative",
    width: "100%",
    backgroundColor: theme.palette.background.main,
    paddingTop: props.headerType == headerTypes.colored ? "20px" : "130px",
    [theme.breakpoints.between("xs", "md")]: {
      paddingTop: props.headerType == headerTypes.colored ? "20px" : "165px",
    },
    paddingBottom: "10vh",
  }),

  //The inner Container class
  innerContainer: {
    maxWidth: "95%",
    zIndex: "3 !important",
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  // Image container class
  coverImageContainer: {
    width: "100%",
    height: "265px",
    marginTop: "37px",
  },
  // Image class
  coverImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  //BreadCrumb Title (Home)
  breadcrumbLinkTitle: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": { textDecoration: "underline" },
    fontWeight: "bold !important",
  },
  //BreadCrumb Last Title (About-Us)
  breadcrumbLastTitle: {
    color: theme.palette.onBackground.light,
    fontWeight: "bold !important",
  },
  // Seperator icon class
  seperatorIcon: {
    fill: theme.palette.onBackground.light,
  },
}));

export default useStyles;
