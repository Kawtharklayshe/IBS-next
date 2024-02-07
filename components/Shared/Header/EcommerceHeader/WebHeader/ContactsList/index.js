import React from "react";
import { getSocialMediaLink } from "../../../../../../utilies/utiliesFuctions";
import { headerTypes } from "../../../../../../constants/enums";
import usePartialAnimiStyles from "../../../CustomAnimation/partialAnimation";
import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import useStyles from "./style";

const ContactsList = ({
  isReadyToAnimate,
  headerType,
  scrollTop,
  socialMediaLinks,
}) => {
  const partialAnimiClasses = usePartialAnimiStyles();
  const classes = useStyles({
    headerType,
    headerTypes,
    scrollTop,
  });

  const email = getSocialMediaLink(socialMediaLinks, "Email");
  const phone = getSocialMediaLink(socialMediaLinks, "Phone");

  return (
    <Box className={classes.root}>
      {email && (
        <Box
          className={`${classes.contactContainer} ${
            isReadyToAnimate() ? partialAnimiClasses.root : undefined
          }`}
          sx={{
            animationDelay: `1.4s`,
          }}
          onClick={() => window.open(`mailTo:${email.value}`, "_self")}
        >
          <EmailIcon className={classes.contactIcon} />
          <Typography variant="caption" className={classes.contactTitle}>
            {email.value}
          </Typography>
        </Box>
      )}
      {phone && (
        <Box
          className={`${classes.contactContainer} ${
            isReadyToAnimate() ? partialAnimiClasses.root : undefined
          }`}
          sx={{
            animationDelay: `1.5s`,
          }}
          onClick={() => window.open(`tel:${phone.value}`, "_self")}
        >
          <LocalPhoneIcon className={classes.contactIcon} />
          <Typography variant="caption" className={classes.contactTitle}>
            {phone.value}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ContactsList;
