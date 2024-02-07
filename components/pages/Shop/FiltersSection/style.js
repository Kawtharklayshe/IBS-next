import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // Title class
  title: {
    color: theme.palette.onBackground.main,
    position: "relative",
    fontWeight: "bold !important",
    "&:before": {
      content: '""',
      width: "32px",
      position: "absolute",
      right: theme.direction == "rtl" ? 0 : "unset",
      left: theme.direction == "rtl" ? "unset" : 0,
      bottom: 0,
      borderBottom: "2px solid",
      borderColor: theme.palette.onBackground.main,
    },
  },
  // Divider Class
  divider: {
    margin: "16px 0px !important",
  },
  // Price section container class
  priceSectionContainer: {
    marginTop: "8px",
  },
  // Price Title class
  priceTitle: {
    color: theme.palette.primary.main,
    margin: "8px 0px !important",
  },
  // Price slider container class
  priceSliderContainer: {
    padding: "0px 8px",
  },
  // Price form conatiner class
  priceFormContainer: {
    marginTop: "16px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // Price Input class
  priceInput: {
    maxWidth: "70px",
  },
  // Filter title class
  filterTitle: {
    color: `${theme.palette.primary.main} !important`,
  },
  // Filter option title class
  filterOptionTitle: {
    color: theme.palette.onBackground.light,
  },
  // Chips container class
  chipsContainer: {
    marginTop: "16px !important",
  },
  // Filter option chip class
  filterOptionChip: {
    margin: "0px 8px 8px 8px !important",
    borderColor: theme.palette.primary.main,
  },
  // Chip avatar class
  chipAvatar: {
    margin: "0px !important",
  },
  // Buttons container class
  buttonsContainer: {
    margin: "16px 0px!important",
    display: "flex",
    alignItems: "center",
  },
  // Filter Button
  filterButton: {
    color: theme.palette.onPrimary.main,
  },
  // Clear Button
  clearButton: {
    margin: "0px 16px !important",
  },
}));
export default useStyles;
