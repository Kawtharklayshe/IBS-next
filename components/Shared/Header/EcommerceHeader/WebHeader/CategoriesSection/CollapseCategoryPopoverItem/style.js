import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    // Root class
    root: {
      margin: "4px 0px",
    },
    // Collapse Header container class
    collapseHeaderContainer: (props) => ({
      color: props.isOpen ? theme.palette.onPrimary.main : "unset",
      padding: "0px 4px",
      backgroundColor: props.isOpen
        ? theme.palette.primary.main
        : theme.palette.card.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      borderRadius: "4px 4px 0px",
      "&:hover": {
        color: props.isOpen
          ? theme.palette.onPrimary.main
          : theme.palette.primary.main,
        "& $headerTitle": {
          color: props.isOpen
            ? theme.palette.onPrimary.main
            : theme.palette.primary.main,
        },
      },
    }),
    // Header title class
    headerTitle: (props) => ({
      color: props.isOpen ? theme.palette.onPrimary.main : "unset",
      fontWeight: "500 !important",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    }),
    // Collapse Content container class
    collapseContentContainer: {
      backgroundColor: theme.palette.card.main,
    },
    // Collapse image container class
    collapseImageContainer: {
      borderRadius: "0px 8px",
      overflow: "hidden",
      height: "100px",
      marginTop: "4px",
    },
    // Child image class
    collapseImage: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      borderRadius: "0px 25px 0px 26px",
    },
    // List Item Icon class
    listItemIcon: {
      marginRight: "4px !important",
      fontSize: "10px !important",
      color: theme.palette.primary.main,
    },
  };
});

export default useStyles;
