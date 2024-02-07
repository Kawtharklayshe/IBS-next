import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    paddingTop: "8px",
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }),
  // Inner Container class
  innerContainer: {
    maxWidth: "95%",
  },
  // First section container
  firstSectionContainer: {
    display: "flex",
    flexDirection: "column !important",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  // Title class
  title: {
    color: theme.palette.onBackground.light,
    margin: "8px 0px !important",
  },
  // SubTitle class
  subTitle: {
    color: theme.palette.onBackground.main,
    margin: "8px 0px !important",
    fontWeight: "600 !important",
  },
  // button class
  button: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    backgroundColor: `${theme.palette.background.main} !important`,
    textTransform: "uppercase",
    margin: "8px 0px !important",
    padding: "8px 16px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: theme.palette.onPrimary.main,
    },
  },
  // Second section container class
  secondSectionContainer: {
    padding: "16px 8px !important",
    display: "flex",
    flexDirection: "column !important",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  // Approcah Item Container class
  approcahItemContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "15px",
    marginBottom: "40px",
  },
  // Icon Container class
  iconContainer: {
    padding: "18px",
    border: "1px solid",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.onPrimary.main,
    },
  },
  // Icon class
  approachIcon: {
    width: "35px",
    height: "35px",
  },
  // Details container class
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  // Details title class
  detailsTitle: {
    color: theme.palette.onBackground.main,
    margin: "0px",
  },
  // Details SubTitle classs
  detailsSubtitle: {
    color: theme.palette.onBackground.light,
    display: "-webkit-box !important",
    "-webkit-line-clamp": "4 !important",
    "-webkit-box-orient": "vertical !important",
    textOverflow: "ellipsis !important",
    overflow: "hidden !important",
  },
}));

export default useStyles;
