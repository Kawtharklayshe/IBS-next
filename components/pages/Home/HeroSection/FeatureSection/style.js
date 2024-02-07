import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    marginTop: "0px !important",
    [theme.breakpoints.up("md")]: {
      marginTop: "-8vh !important",
    },
  },
  // Inner Container class
  innerContainer: {
    position: "relative",
    maxWidth: "95%",
    // for Even childs
    "& div:nth-child(even)": {
      "& $itemContainer": {
        background: theme.palette.primary.light,
        "&:hover": {
          "& $itemIcon": {
            transform: "scale(1.1)",
            color: theme.palette.primary.main,
          },
          "& $itemTitle": { color: theme.palette.primary.main },
          background: theme.palette.background.main,
        },
      },
    },
  },
  // Item container class
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "25px 40px",
    cursor: "pointer",
    background: theme.palette.primary.main,
    "&:hover": {
      "& $itemIcon": {
        transform: "scale(1.1)",
        color: theme.palette.primary.main,
      },
      "& $itemTitle": { color: theme.palette.primary.main },
      background: theme.palette.background.main,
    },
  },
  // Item Icon class
  itemIcon: {
    fontSize: "45px !important",
    color: theme.palette.onPrimary.main,
  },
  // Item Title class
  itemTitle: {
    marginTop: "24px !important",
    fontWeight: "500 !important",
    textTransform: "uppercase !important",
    color: theme.palette.onPrimary.main,
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px !important",
    },
  },
}));

export default useStyles;
