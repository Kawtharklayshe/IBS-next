import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "8px",
    padding: "0px 8px",
    border: "1px solid",
    borderColor:
      props.tempSelectedAddress == props.addressId
        ? theme.palette.primary.main
        : "#bcbcbc",
    borderRadius: "4px",
    backgroundColor:
      props.tempSelectedAddress == props.addressId
        ? theme.palette.primary.main
        : theme.palette.background.main,
  }),
  // Address title class
  addressTitle: (props) => ({
    color:
      props.tempSelectedAddress == props.addressId
        ? theme.palette.background.main
        : theme.palette.primary.main,
    cursor: "pointer",
  }),
  // More vertical icon class
  moreVertIcon: (props) => ({
    color:
      props.tempSelectedAddress == props.addressId
        ? theme.palette.background.main
        : theme.palette.primary.main,
  }),
}));

export default useStyles;
