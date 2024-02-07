import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Collapse, Typography } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import useStyles from "./style";

const HtmlCollapse = ({ data, title }) => {
  let { t, lang } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const classes = useStyles({ isOpen: open }); // passing state to makeStyles hook to use it with conditional styles
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
          <div
            dangerouslySetInnerHTML={{
              __html: data,
            }}
            className={classes.content}
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default HtmlCollapse;
