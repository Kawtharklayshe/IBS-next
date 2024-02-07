import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    position: "relative",
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    scrollBehavior: "smooth",
    padding: "50px 0px",
    textAlign: "center",
    verticalAlign: "baseline",
  }),
  // Overlay class
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    backdropFilter: "blur(13.3333px)",
  },
  // Inner Container class
  innerContainer: {
    position: "relative", // it's so important  for displaying items on top of overlay layer
    maxWidth: "95%",
    zIndex: 1,
  },
  // Grid Container class
  gridContainer: {
    justifyContent: "space-between",
  },
  // Statistic Item container class
  itemContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  // Item icon class
  itemIcon: {
    color: theme.palette.onPrimary.main,
    fontSize: "50px",
  },
  // Item title class
  itemTitle: {
    color: theme.palette.onPrimary.main,
    margin: "10px 8px !important",
    fontWeight: "500 !important",
    textTransform: "uppercase",
    wordBreak: "break-all",
  },
  // Item Quantity class
  itemQuantity: {
    fontSize: "30px !important",
    padding: "0px !important",
    color: theme.palette.onPrimary.main,
    fontWeight: "600 !important",
  },
}));

export default useStyles;
