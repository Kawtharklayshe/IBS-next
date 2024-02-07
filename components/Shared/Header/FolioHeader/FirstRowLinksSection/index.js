import React, { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { Typography, Box } from "@mui/material";
import PinIcon from "../../../../../assets/SVG/PinIcon";
import PhoneIcon from "../../../../../assets/SVG/PhoneIcon";
import EmailIcon from "../../../../../assets/SVG/EmailIcon";
import usePartialAnimiStyles from "../../CustomAnimation/partialAnimation";
import useStyles from "./style";

const FirstRowLinksSection = ({
  theme,
  socialMediaLinks,
  isReadyToAnimate,
  animationDelay,
}) => {
  let { t } = useTranslation("common");
  const partialAnimiClasses = usePartialAnimiStyles();
  const classes = useStyles();
  // Function for getting specific media value
  const getMediaValue = (name) => {
    return (
      socialMediaLinks?.find(({ channel }) => channel == name)?.value ?? ""
    );
  };

  const handleClickLocationIcon = () => {
    if (getMediaValue("Lat") && getMediaValue("Lng"))
      window.open(
        `https://www.google.com/maps/@${getMediaValue("Lat")},${getMediaValue(
          "Lng"
        )},19z`,
        "_blank"
      );
  };
  const handleClickPhoneIcon = () => {
    window.open(`tel:${getMediaValue("Phone")}`, "_self");
  };
  const handleClickEmailIcon = () => {
    window.open(`mailto:${getMediaValue("Email")}`, "_self");
  };

  return (
    <Fragment>
      {getMediaValue("Address") && (
        <Box
          className={`${classes.mediaContainer} ${
            isReadyToAnimate() ? partialAnimiClasses.root : undefined
          }`}
          sx={{
            animationDelay: `${animationDelay}s`,
          }}
        >
          <PinIcon
            color={theme?.primaryColor}
            className={classes.mainIcon}
            onClick={handleClickLocationIcon}
          />
          <Box className={classes.mediaTextSection}>
            <Typography className={classes.mediaTitle}>
              {t("Our Location")}
            </Typography>
            <Typography componet="span" className={classes.mediaValue}>
              {getMediaValue("Address")}
            </Typography>
          </Box>
        </Box>
      )}
      {getMediaValue("Phone") && (
        <Box
          className={`${classes.mediaContainer} ${
            isReadyToAnimate() ? partialAnimiClasses.root : undefined
          }`}
          sx={{
            animationDelay: `${animationDelay + 0.1}s`,
          }}
        >
          <PhoneIcon
            color={theme?.primaryColor}
            className={classes.mainIcon}
            onClick={handleClickPhoneIcon}
          />
          <Box className={classes.mediaTextSection}>
            <Typography className={classes.mediaTitle}>
              {t("Call us")}
            </Typography>
            <Typography componet="span" className={classes.mediaValue}>
              {getMediaValue("Phone")}
            </Typography>
          </Box>
        </Box>
      )}
      {getMediaValue("Email") && (
        <Box
          className={`${classes.mediaContainer} ${
            isReadyToAnimate() ? partialAnimiClasses.root : undefined
          }`}
          sx={{
            animationDelay: `${animationDelay + 0.2}s`,
          }}
        >
          <EmailIcon
            color={theme?.primaryColor}
            className={classes.mainIcon}
            onClick={handleClickEmailIcon}
          />
          <Box className={classes.mediaTextSection}>
            <Typography className={classes.mediaTitle}>{t("email")}</Typography>
            <Typography componet="span" className={classes.mediaValue}>
              {getMediaValue("Email")}
            </Typography>
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default FirstRowLinksSection;
