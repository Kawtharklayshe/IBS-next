import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    background: "#f8f9fa",
    width: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    outline: "none !important",
    borderRadius: "4px",
  },
  // Save button class
  saveButton: {
    marginTop: "16px !important",
  },
}));

export default useStyles;
