import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    // Root class
    root: {
      margin: "16px 0px",
    },
    // Collapse Header container class
    collapseHeaderContainer: (props) => ({
      color: props.isOpen
        ? theme.palette.onPrimary.main
        : theme.palette.primary.main,
      padding: "8px",
      backgroundColor: props.isOpen
        ? theme.palette.primary.main
        : theme.palette.card.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      boxShadow: "0px 3px 13px rgba(0, 0, 0, 0.24)",
    }),
    // Header title class
    headerTitle: (props) => ({
      color: props.isOpen
        ? theme.palette.onPrimary.main
        : theme.palette.primary.main,
    }),
    // Collapse Content container class
    collapseContentContainer: {
      backgroundColor: theme.palette.card.main,
      boxShadow: "0px 3px 13px rgba(0, 0, 0, 0.24)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px",
    },
    // Content title class
    contentTitle: {
      color: theme.palette.onCard.main,
    },
  };
});

export default useStyles;
