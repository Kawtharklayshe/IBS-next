import { useState, useRef } from "react";
import { uid } from "react-uid";
import {
  handleMsgBeforeSend,
  getMessages,
} from "../../../utilies/chat/configureConnection";
import { Box, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./style";

const ChatUI = ({ handleClick, state }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const inputRef = useRef("");
  const classes = useStyles();

  const handleChange = (e) => {
    inputRef.current = e.target.value;

    if (inputRef.current && isEmpty) {
      setIsEmpty(false);
      return;
    }

    if (!inputRef.current && !isEmpty) {
      setIsEmpty(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleSend = async () => {
    const roomId = JSON.parse(localStorage.getItem("roomId"));
    const msg = inputRef.current;

    document.getElementById("msg").value = "";
    inputRef.current = "";
    await handleMsgBeforeSend(msg, roomId);
  };

  const handleScrollTop = async (e) => {
    if (e.target.scrollTop !== 0) return;

    await getMessages();
  };

  return (
    <Box
      className={`${classes.root} ${
        state === "open" ? "open" : state === "close" ? "close" : undefined
      }`}
    >
      <Box className="chatHeader">
        <Box component="span" className="name">
          Support
        </Box>
        <Box component="span" className="close">
          <CloseIcon onClick={(e) => handleClick(e, "close")} />
        </Box>
      </Box>
      <ul id="messagesArea" onScroll={handleScrollTop}>
        <div id="status"></div>
      </ul>
      <Box className="msgInput">
        <TextField
          id="msg"
          variant="standard"
          placeholder="Type your message"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <Button id="btn" variant="text" onClick={handleSend} disabled={isEmpty}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatUI;
