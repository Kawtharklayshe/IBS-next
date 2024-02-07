import { makeStyles } from "@mui/styles";

// About us classes
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.card.main,
    color: theme.palette.onCard.main,
    boxShadow: `0px 0px ${theme.shape.cardElevation}px`,
    borderRadius: theme.shape.cardRadius,
    height: "300px",
    "&:hover": {
      boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.3)",
    },
  },
  // Inner container class
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // Employee image container
  employeeImageContainer: {
    width: "100%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Employee image class
  employeeImage: {
    objectFit: "scale-down",
    objectPosition: "center",
    borderRadius: "50%",
    width: "150px",
    height: "150px",
  },
  // Employee FullName title class
  employeeFullName: {
    color: theme.palette.onCard.dark,
    padding: "0px 16px",
  },
  // Employee Position title class
  employeePosition: {
    color: theme.palette.onCard.main,
    padding: "8px 16px",
    textAlign: "center",
  },
}));

export default useStyles;
