import React, { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import NotificationSlider from "./NotificationsSlider";
import useStyles from "./style";

const AlertNotificationsSection = ({ open, handleClose, notifications }) => {
  const Router = useRouter();
  const classes = useStyles();

  // to prevent the "classes.animateRoot" from applying its animations
  // when close = false from previous page
  useLayoutEffect(() => {
    if (typeof window !== "object" || open) return;

    document.getElementById("notificationSlider").style.display = "none";
  }, [Router.asPath]);

  return (
    <Box
      id="notificationSlider"
      className={!open ? classes.animateRoot : undefined}
    >
      <Box className={classes.root}>
        <Box className={classes.sliderContainer}>
          <NotificationSlider data={notifications?.alerts} />
        </Box>
        <Box className={classes.closeBtnContainer}>
          <CloseRoundedIcon onClick={handleClose} />
        </Box>
      </Box>
    </Box>
  );
};

export default AlertNotificationsSection;
