import { makeStyles } from "@mui/styles";

// infoSection Classes
const useStyles = makeStyles((theme) => ({
  // main container
  root: {
    display: "flex",
    gap: "50px",
    justifyContent: "center",
    marginBottom: "200px",
    flexWrap: "wrap",
  },
  // address container class
  addressContainer: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "8px",
    margin: "15px 0px",
    cursor: "pointer",
  },
  // address card class
  addressCard: {
    boxShadow: "0px 4px 16px 0px rgb(0 0 0 / 12%)",
    transition: "0.3s",
    width: "242px",
    height: "100%",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& $iconClass": {
        color: "white !important",
      },
      "& $addressTitle": {
        color: "white !important",
      },
      "& $addressDescription": {
        color: "white !important",
      },
    },
  },
  // address icon class
  iconClass: {
    color: theme.palette.primary.main,
    fontSize: "27px",
    display: "block !important",
    margin: "auto",
    marginBottom: "20px",
  },
  // address title class
  addressTitle: {
    margin: "0px 0px 20px",
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: 1.6,
    textAlign: "center",
    marginBottom: "20px !important",
  },
  // address description class
  addressDescription: {
    color: theme.palette.primary.main,
    padding: "0 25px",
    fontSize: "1rem !important",
    lineHeight: "50px",
    borderRadius: "25px",
    backgroundColor: "#f1f1f17a",
    margin: "0px 0px 8px !important",
    fontFamily: "Roboto !important",
    lineHeight: "1.5 !important",
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
  },

  // phone container class
  phoneContainer: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "8px",
    margin: "15px 0px",
  },
  // phone card class
  phoneCard: {
    width: "242px",
    height: "100%",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& $phoneIconClass": {
        color: "white !important",
      },
      "& $phoneTitle": {
        color: "white !important",
      },
      "& $phoneDescription": {
        color: "white !important",
      },
    },
  },
  // phone icon class
  phoneIconClass: {
    color: theme.palette.primary.main,
    fontSize: "27px",
    display: "block !important",
    margin: "auto",
    marginBottom: "20px",
  },
  // phone title class
  phoneTitle: {
    margin: "0px 0px 20px",
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: 1.6,
    textAlign: "center",
    marginBottom: "20px !important",
  },
  // phone description class
  phoneDescription: {
    color: theme.palette.primary.main,
    padding: "0 25px",
    fontSize: "1rem !important",
    borderRadius: "25px",
    backgroundColor: "#f1f1f17a",
    margin: "0px 0px 8px !important",
    fontFamily: "Roboto !important",
    lineHeight: "1.5 !important",
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
  },

  // Eamil container class
  emailContainer: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "8px",
    margin: "15px 0px",
  },
  // Email card class
  emailCard: {
    width: "242px",
    height: "100%",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& $emailIconClass": {
        color: "white !important",
      },
      "& $emailTitle": {
        color: "white !important",
      },
      "& $emailDescription": {
        color: "white !important",
      },
    },
  },
  // Email icon class
  emailIconClass: {
    color: theme.palette.primary.main,
    fontSize: "27px",
    display: "block !important",
    margin: "auto",
    marginBottom: "20px",
  },
  // Email title class
  emailTitle: {
    margin: "0px 0px 20px",
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: 1.6,
    textAlign: "center",
    marginBottom: "20px !important",
  },
  // Email description class
  emailDescription: {
    color: theme.palette.primary.main,
    padding: "0 25px",
    fontSize: "1rem !important",
    borderRadius: "25px",
    backgroundColor: "#f1f1f17a",
    margin: "0px 0px 8px !important",
    fontFamily: "Roboto !important",
    lineHeight: "1.5 !important",
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
