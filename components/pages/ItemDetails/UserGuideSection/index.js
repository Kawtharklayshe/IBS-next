import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Button, Collapse, Typography } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import useStyles from "./style";

const UserGuideSection = ({ data, title }) => {
  let { t, lang } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const classes = useStyles({ isOpen: open });
  const handleClick = () => setOpen(!open);
  return (
    <Box className={classes.root}>
      <Box className={classes.collapseHeaderContainer} onClick={handleClick}>
        <Typography variant="h5" component="h5" className={classes.headerTitle}>
          {t(title)}
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className={classes.collapseContentContainer}>
          {Boolean(Object.entries(data).length) && (
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.contentTitle}
            >
              {t("Click here to donwload the file")}
            </Typography>
          )}
          {data &&
            Object.entries(data)
              .filter(([kk, vv]) => vv)
              .map(([key, value]) => (
                <Button
                  variant="outlined"
                  key={key}
                  onClick={() => window.open(value, "_blank")}
                >
                  {t("Donwload")} {`"${key}"`}
                </Button>
              ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default UserGuideSection;
