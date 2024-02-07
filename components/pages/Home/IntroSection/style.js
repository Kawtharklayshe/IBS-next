import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    paddingTop: "8px",
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop:"200px"
  }),
  // Inner Container class
  innerContainer: {
    maxWidth: "95%",
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
  // Details container class
  detailsContainer: {
    display: "flex",
    flexDirection: "column !important",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "25px 20px",
    marginBottom: "8px !important",
    backgroundColor: theme.palette.background.main,
  },
  // Details title class
  detailsTitle: {
    color: theme.palette.primary.main,
  },
  // Details subTitle class
  detailsSubTitle: {
    color: theme.palette.primary.light,
    marginTop: "8px !important",
    display: "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  // Details button class
  detailsButton: {
    color: `${theme.palette.onPrimary.main} !important`,
    backgroundColor: `${theme.palette.primary.main} !important`,
    textTransform: "uppercase",
    marginTop: "8px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.onPrimary.main} !important`,
      color: `${theme.palette.primary.main} !important`,
    },
  },
}));

export default useStyles;
