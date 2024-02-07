import { makeStyles } from "@mui/styles";

export const containerStyle = {
  width: "100%",
  height: "45vh",
};

const useStyles = makeStyles((theme) => ({
  // Detect button class
  detectButton: {
    margin: "8px 0px !important",
  },
  // Detect Icon class
  detectIcon: {
    margin: "0px 8px",
  },
}));

export default useStyles;
