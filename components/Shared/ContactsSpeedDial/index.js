import React, { useState, useEffect } from "react";
import { getUnreadMsgs } from "../../../utilies/chat/chatCRUDS";
import { start } from "../../../utilies/chat/configureConnection";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ScrollUpIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import ChatIcon from "@mui/icons-material/Chat";
import ChatUI from "../ChatUI";
import useStyles from "./style";

const ContactsSpeedDial = ({ contactList = [] }) => {
  const [open, setOpen] = useState(false);
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [state, setState] = useState("");
  const [unreadMsgs, setUnreadMsgs] = useState(0);

  const classes = useStyles({ messageCount: unreadMsgs });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleShowScrollIcon = () => {
    if (window.scrollY > 10) setShowScrollIcon(true);
    else setShowScrollIcon(false);
  };

  useEffect(() => {
    if (typeof window === "object")
      document.addEventListener("scroll", toggleShowScrollIcon);
    return () => {
      document.removeEventListener("scroll", toggleShowScrollIcon);
    };
  }, []);

  const handleOpenLink = (link) => {
    if (link) window.open(link, "_blank");
    handleClose();
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleClick = async (e, state) => {
    setState(state);
    if (state !== "open") return;

    //IF THERE IS A STORED USER => NO NEED TO MAKE ANOTHER ONE
    const storedUser = JSON.parse(localStorage.getItem("user"));

    await start();
  };

  useEffect(async () => {
    const uid = localStorage.getItem("roomId");
    if (!uid) return;
    const unReadMsgs = await getUnreadMsgs(uid);
    setUnreadMsgs(unReadMsgs);
  }, []);

  const fullSocialMediaOptions = [
    "Facebook",
    "Twitter",
    "Instagram",
    "WhatsApp",
  ];

  const SocialMediaOptions = contactList
    .filter((item) => fullSocialMediaOptions.includes(item.channel))
    .map((option) => {
      switch (option.channel) {
        case "Facebook":
          return {
            icon: <FacebookIcon />,
            name: option.channel,
            value: option.value,
            action: handleOpenLink,
          };
        case "Instagram":
          return {
            icon: <InstagramIcon />,
            name: option.channel,
            value: option.value,
            action: handleOpenLink,
          };
        case "WhatsApp":
          return {
            icon: <WhatsAppIcon />,
            name: option.channel,
            value: option.value,
            action: handleOpenLink,
          };
        case "Twitter":
          return {
            icon: <TwitterIcon />,
            name: option.channel,
            value: option.value,
            action: handleOpenLink,
          };
      }
    });

  return (
    <Box className={classes.root}>
      <Box
        className={`${classes.innerContainer} ${
          showScrollIcon ? classes.animation : undefined
        }`}
      >
        <SpeedDial
          ariaLabel="SpeedDial"
          icon={<ConnectWithoutContactIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {SocialMediaOptions.map((option) => (
            <SpeedDialAction
              key={option.name}
              icon={option.icon}
              tooltipTitle={option.name}
              onClick={() => option.action(option.value)}
            />
          ))}
          <SpeedDialAction
            key="chatUI"
            className={classes.chattingButton}
            icon={<ChatIcon />}
            tooltipTitle="Welcome to our site, if you need help simply reply to this message, we are online and ready to help"
            onClick={(e) => handleClick(e, "open")}
          />
        </SpeedDial>
        <ScrollUpIcon
          onClick={handleScrollUp}
          className={classes.scrollUpIcon}
        />
      </Box>
      <ChatUI handleClick={handleClick} state={state} />
    </Box>
  );
};

export default ContactsSpeedDial;
