import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {},
  // Main footer container class
  mainFooterContainer: {
    backgroundImage: `url("/images/footerBackground.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.background.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 0px !important",
  },
  // Inner Container class
  innerContainer: {
    maxWidth: "95%",
  },
  // First Row container class
  firstRowContainer: {
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.primary.main,
    paddingBottom: "20px",
    alignItems: "center",
  },
  secondRowContainer: {
    paddingTop: "20px",
  },
  // Logo container class
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },

  // Logo Image class
  logoImage: {
    width: "250px",
    height: "70px",
    objectFit: "scale-down",
  },
  // Description container class
  descriptionContainer: {
    display: "flex",
    alignItems: "center",
  },
  // Description title class
  description: {
    color: theme.palette.primary.main,
    fontWeight: "600 !important",
  },
  // column container class
  ColumnContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  //  Column title class
  columnTitle: {
    color: theme.palette.primary.main,
    fontWeight: "600 !important",
    paddingBottom: "10px !important",
  },
  // Column item title class
  columnItemTitle: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  // Location icon class
  locationIcon: {
    fill: theme.palette.primary.main,
    margin: "0px 5px !important",
  },
  // Phone icon class
  phoneIcon: {
    fill: theme.palette.primary.main,
    margin: "0px 5px !important",
  },
  // Email icon class
  emailIcon: {
    fill: theme.palette.primary.main,
    margin: "0px 5px !important",
  },
  // Facebook icon class
  facebookIcon: {
    fill: theme.palette.primary.main,
    margin: "0px 5px !important",
  },
  // Instagram icon class
  instagramIcon: {
    fill: theme.palette.primary.main,
    margin: "0px 5px !important",
  },
  // WhatsApp icon class
  whatsAppIcon: {
    fill: theme.palette.primary.main,
    margin: "0px 5px !important",
  },
  // Twitter icon class
  twitterIcon: {
    fill: theme.palette.primary.main,
    margin: "0px 5px !important",
  },
  // Business icon class
  businessIcon: {
    fill: theme.palette.primary.main,
    margin: "0px 5px !important",
  },

  // Column Item as a link class
  columnLinkTitle: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
