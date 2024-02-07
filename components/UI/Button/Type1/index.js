import useTranslation from "next-translate/useTranslation";
import { Button } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import useStyles from "./style";

const CustomButton = ({ title, onSubmit, classNames = undefined }) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  return (
    <Button className={`${classes.root} ${classNames}`} onClick={onSubmit}>
      {t(title)}
      <DoubleArrowIcon className={classes.arrowIcon} />
    </Button>
  );
};

export default CustomButton;
