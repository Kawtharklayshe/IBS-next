import React, { useEffect } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Grid, Box, Typography } from "@mui/material";
import useStyles from "./style";

const Canvas = ({ children, isOpen, toggle, setToggle }) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles({ isOpen });

  // for handling click event outside the vertical filters menu on mobile
  useEffect(() => {
    if (typeof window === "object") {
      document.addEventListener("click", (e) => {
        if (e.target.id == "dropShadowWrapper") setToggle(false);
      });

      return document.removeEventListener("click", (e) => {
        if (e.target.id == "dropShadowWrapper") setToggle(false);
      });
    }
  }, []);
  return (
    <Box className={classes.root}>
      <Typography
        variant="h6"
        component="h6"
        className={classes.title}
        onClick={toggle}
      >
        <Image
          src="/images/filtersIcon.png"
          alt="filtersIcon"
          width={15}
          height={15}
        />
        {t("Filters")}
      </Typography>
      <Box
        container
        className={classes.dropShadowWrapper}
        id="dropShadowWrapper"
      >
        <Box className={classes.innerContainer}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Canvas;
