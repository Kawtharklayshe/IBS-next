import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Media icon class
  mediaIcon: {
    color: theme.palette.primary.main,
    fontSize: "20px !important",
    marginRight: "4px !important",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      marginRight: "8px !important",
    },
  },
}));

export default useStyles;
