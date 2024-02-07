import React, { Fragment } from "react";
import { headerTypes } from "../../../../../../constants/enums";
import usePartialAnimiStyles from "../../../CustomAnimation/partialAnimation";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useStyles from "./style";

const SocialMediaList = ({
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

  // to calculate the animation delay for the elements after the nav items
  const calcDelay = (x, base) => {
    const delay = x + Number(`0.${base}`);
    return `${Math.round(delay * 10) / 10}s`;
  };

  const linksArr = socialMediaLinks
    .map(({ channel, value }, index) => {
      switch (channel) {
        case "Facebook":
          if (value != "")
            return (
              <FacebookIcon
                key={index}
                className={`${classes.mediaIcon} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(1.6, index),
                }}
                onClick={() => window.open(value, "_blank")}
              />
            );
          break;
        case "Instagram":
          if (value != "")
            return (
              <InstagramIcon
                key={index}
                className={`${classes.mediaIcon} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(1.6, index),
                }}
                onClick={() => window.open(value, "_blank")}
              />
            );
          break;
        case "Twitter":
          if (value != "")
            return (
              <TwitterIcon
                key={index}
                className={`${classes.mediaIcon} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(1.6, index),
                }}
                onClick={() => window.open(value, "_blank")}
              />
            );
          break;
        case "WhatsApp":
          if (value != "")
            return (
              <WhatsAppIcon
                key={index}
                className={`${classes.mediaIcon} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(1.6, index),
                }}
                onClick={() => window.open(value, "_blank")}
              />
            );
          break;
        default:
          break;
      }
    })
    .filter((item) => item);

  return <Fragment>{linksArr}</Fragment>;
};

export default SocialMediaList;
