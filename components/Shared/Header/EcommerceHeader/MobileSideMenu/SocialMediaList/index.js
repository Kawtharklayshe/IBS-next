import React, { Fragment } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useStyles from "./style";

const SocialMediaList = ({ socialMediaLinks }) => {
  const classes = useStyles();

  const linksArr = socialMediaLinks
    .map(({ channel, value }, index) => {
      switch (channel) {
        case "Facebook":
          if (value != "")
            return (
              <FacebookIcon
                key={index}
                className={classes.mediaIcon}
                onClick={() => window.open(value, "_blank")}
              />
            );
          break;
        case "Instagram":
          if (value != "")
            return (
              <InstagramIcon
                key={index}
                className={classes.mediaIcon}
                onClick={() => window.open(value, "_blank")}
              />
            );
          break;
        case "Twitter":
          if (value != "")
            return (
              <TwitterIcon
                key={index}
                className={classes.mediaIcon}
                onClick={() => window.open(value, "_blank")}
              />
            );
          break;
        case "WhatsApp":
          if (value != "")
            return (
              <WhatsAppIcon
                key={index}
                className={classes.mediaIcon}
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
