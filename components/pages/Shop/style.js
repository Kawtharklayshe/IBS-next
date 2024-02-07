import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // inner container class
  innerContainer: {
    maxWidth: "95%",
    paddingBottom: "75px",
  },
  // pagination container class
  paginationContainer: {
    display: "flex",
    justifyContent: "end",
    padding: "24px",
    marginTop: "16px",
  },
  // Filters section container for md screens
  filtersSectionMdContainer: {
    display: "none",
    paddingRight: "16px",
    [theme.breakpoints.up(900)]: {
      display: "unset",
    },
  },
  // Filters section container for small screens
  filtersSectionSmallContainer: {
    display: "block",
    marginBottom: "8px !important",
    [theme.breakpoints.up(900)]: {
      display: "none",
    },
  },
  // Cards container for md screens
  cardsMdContainer: {
    display: "none !important",
    [theme.breakpoints.up(900)]: {
      display: "flex !important",
    },
    padding: "0px 20px !important",
  },
  // Cards container for small screens
  cardsSmallContainer: {
    display: "flex !important",
    [theme.breakpoints.up(899)]: {
      display: "none !important",
    },
  },

  // Search, other filters container class
  otherFiltersContainer: {
    padding: "0px 24px",
  },

  // Search field container class
  searchFieldContainer: {
    marginBottom: "16px !important",
    padding: "8px",
  },
  // Search Field class
  searchInput: {
    border: "1px solid !important",
    borderColor: `${theme.palette.primary.main} !important`,
    borderRadius: "0px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "0px",
      height: "39px",
      color: `${theme.palette.primary.main} !important`,
      "& fieldset": {
        border: "none !important",
      },
    },
  },
  // Sorting, View container class
  sortingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px !important",
    [theme.breakpoints.up(900)]: {
      justifyContent: "end",
    },
  },
  // Sort Title
  sortTitle: {
    color: theme.palette.onBackground.light,
  },
  // View title
  viewTitle: {
    color: theme.palette.onBackground.light,
  },
  // Form control container
  selectContainer: {
    margin: "8px !important",
    minWidth: 90,
  },
  // Display toggle button class
  displayToggleButton: {
    borderRadius: "4px !important",
    border: "1px solid !important",
    borderColor: theme.palette.primary.main,
    "&:nth-child(2)": {
      borderLeft:
        theme.direction == "rtl"
          ? "initial"
          : "1px solid transparent !important",
      borderRight:
        theme.direction == "rtl"
          ? "1px solid transparent !important"
          : "initial",
    },
  },
}));

export default useStyles;
