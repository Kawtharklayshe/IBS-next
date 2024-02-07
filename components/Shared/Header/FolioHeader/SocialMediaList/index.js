import React, { Fragment } from "react";
import { headerTypes } from "../../../../../constants/enums";
import usePartialAnimiStyles from "../../CustomAnimation/partialAnimation";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Twitter } from "@mui/icons-material";
import useStyles from "./style";

const SocialMediaList = ({
  isMobileView,
  isReadyToAnimate,
  previousDelay,
  headerType,
  scrollTop,
  pages,
  socialMediaLinks,
}) => {
  const partialAnimiClasses = usePartialAnimiStyles();
  const classes = useStyles({
    headerType,
    headerTypes,
    scrollTop,
  });
  const navItemsArr = isMobileView ? [] : pages;

  // to calculate the animation delay for the elements after the nav items
  const calcDelay = (x, arr) => {
    const delay = x + arr.length * 0.04;
    return `${delay.toFixed(2)}s`;
  };

  // for animations purposes, because the social index in "socialMediaLinks"
  // is the only thing that matters when we need to assign a proper delay to it
  // in the next "renderSocialMediaList" function
  const scoialDelays = {};
  let delay = previousDelay;
  socialMediaLinks.forEach((social, index) => {
    scoialDelays[index] = delay;
    delay += 0.04;
  });

  const linksArr = socialMediaLinks
    .map(({ channel, value }, index) => {
      switch (channel) {
        case "Facebook":
          if (value != "")
            return (
              <FacebookIcon
                className={`${classes.mediaIcon} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(scoialDelays[index], navItemsArr),
                }}
                key={index}
                onClick={() => window.open(value, "_blank")}
              />
            );
          break;
        case "Instagram":
          if (value != "")
            return (
              <InstagramIcon
                className={`${classes.mediaIcon} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(scoialDelays[index], navItemsArr),
                }}
                key={index}
                onClick={() => window.open(value, "_blank")}
              />
            );
          break;
        case "Twitter":
          if (value != "")
            return (
              <Twitter
                className={`${classes.mediaIcon} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(scoialDelays[index], navItemsArr),
                }}
                key={index}
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
