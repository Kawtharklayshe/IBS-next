import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    padding: "8px 0px",
    backgroundImage: `url(${props.backgroundImage})`,
   
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
}));

export default useStyles;
