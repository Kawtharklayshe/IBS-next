import { getRoomMessages, addStrangeUser } from "./chatCRUDS";
import isOnline from "./isOnline";
import * as signalR from "@microsoft/signalr";

const msgsArr = [];
const hashsArr = [];
let allMsgsArr = [];
let lastMessage = 0;
let firstTime = true;
let messagesLength = 0;
let fetching = false;
let canLoadMore = true;

export const makeConnection = () => {
  if (typeof window !== "object") return;

  const user = JSON.parse(localStorage.getItem("user"));

  const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${process.env.NEXT_PUBLIC_CHAT_SERVER_PATH}/hubs/supportChat`, {
      accessTokenFactory: async () => {
        if (user) return user.accessToken;
        else {
          await addStrangeUser();
          const user = JSON.parse(localStorage.getItem("user"));
          return user.accessToken;
        }
      },
    })
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();

  return connection;
};

let connection = makeConnection();

//add spinner
const addSpinner = () => {
  const span = document.createElement("span");
  span.classList.remove("date");
  span.classList.add("spinner");
  return span;
};

// for today
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function convertUTCDateToLocalDate(date) {
  var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  var offset = date.getTimezoneOffset() / 60;
  var hours = date.getHours();
  console.log("mdmdmsms", date);
  newDate.setHours(hours - offset);

  return newDate;
}

// construct date
const date = (date) => {
  let constructedDate = convertUTCDateToLocalDate(new Date(`${date} utc`));

  const today = new Date();

  const isToday = today.toDateString() === constructedDate.toDateString();
  console.log("mdmdmllld", isToday);

  const requiredDate = isToday
    ? formatAMPM(new Date(`${date} utc`))
    : constructedDate;

  return requiredDate.toLocaleString();
  // return constructedDate.toLocaleString();
};

//func for handle the status change's notification
export const handleStatusChange = (message, close, error = false) => {
  const status = document.getElementById("status");
  //remove any exsiting classes
  status.classList.remove("open", "close");
  status.textContent = `${message} `;

  const spinner = addSpinner();

  status.append(!error ? spinner : "");
  !close && status.classList.add("open");
  close && status.classList.add("open", "close");
};

export const getMessages = async () => {
  if (fetching || !canLoadMore) return;
  fetching = true;
  const status = document.getElementById("status");
  const roomId = JSON.parse(localStorage.getItem("roomId"));

  //show loading state
  handleStatusChange("Loading", false);
  //get messages
  const allMsgs = await getRoomMessages(roomId, lastMessage);
  //to prevent any try to fetch new set before arriving the current one
  fetching = false;
  status.classList.add("close");
  if (!allMsgs?.isSuccess) return;
  let messages = allMsgs.data?.messages;

  lastMessage = messages[messages.length - 1]?.id || 0;

  console.log("mdmdmd", messages);
  messagesLength += messages.length;

  if (!messages) {
    //error msg
    handleStatusChange("Something wrong", true, true);
    return;
  }

  if (!messages.length) {
    //No more messages notification
    canLoadMore = false;
    if (messagesLength > 0) handleStatusChange("No more messages", true, true);
    return;
  }
  allMsgsArr.push(...messages);
  //reverse array to get the latest msg at the bottom of the chat box
  const reversedArr = messages.reverse();
  const reversedArrLength = reversedArr.length;
  const li = document.createElement("li");
  const fragment = document.createDocumentFragment();

  reversedArr.forEach((msg) => {
    const clonedLi = li.cloneNode();
    clonedLi.classList.add(`${!msg.isAdmin ? "rightMsg" : "leftMsg"}`);

    clonedLi.innerHTML = `${msg.message}<br>`;
    const span = document.createElement("span");
    span.classList.remove("spinner");
    span.classList.add("date");
    span.textContent = date(`${msg.dateOfMessage}`);
    // span.textContent = msg.dateOfMessage;
    clonedLi.append(span);
    fragment.append(clonedLi);
  });

  const mesgArea = document.getElementById("messagesArea");
  const mesgAreaHeightBefore = mesgArea.scrollHeight;
  mesgArea.prepend(fragment);
  mesgArea.scrollTop = mesgArea.scrollHeight - mesgAreaHeightBefore;
};

// what we will do durring the reconnecting
export const reconnecting = () => {
  connection.onreconnecting(() => {
    // handleStatusChange("Connecting", false);
  });
};

//what we want after the connection is successfully reconnected
export const reconnected = () => {
  connection.onreconnected(async () => {
    //handleStatusChange("Connected, joining room", false);

    const roomId = JSON.parse(localStorage.getItem("roomId"));

    await joinRoom(roomId);
  });
};

const handleClick = async () => {
  await start();

  const status = document.getElementById("status");
  handleStatusChange("joining", false);

  status.removeEventListener("click", handleClick);
};

// what we will do when disconnected
export const disconnected = () => {
  connection.onclose(async () => {
    handleStatusChange("Disconnected, retry", false, true);

    const status = document.getElementById("status");
    status.style.cursor = "pointer";

    status.addEventListener("click", handleClick);
  });
};

//create new room
export const createRoom = async () => {
  try {
    const { uid } = await connection.invoke("CreateRoom");

    localStorage.setItem("roomId", JSON.stringify(uid));
  } catch (err) {
    console.error(err);
  }
};

// join to room
export const joinRoom = async (roomId) => {
  const status = document.getElementById("status");

  try {
    const arg = [
      {
        Uid: roomId,
      },
    ];
    await connection.invoke("JoinToRoom", ...arg);

    firstTime && handleStatusChange("joining", true);
    // handleStatusChange("joining", true);
    firstTime = false;

    !firstTime && status.classList.add("close");
    // status.classList.add("close");

    console.log("hi msgsArr", msgsArr);

    if (!msgsArr.length) return;
    msgsArr.forEach(async (arg) => await sendMessage(arg));
  } catch (err) {
    console.error(err);
    handleStatusChange("Joining failed", false, true);
  }
};

//insert coming message in the chat box with spinner before the actual one comes
const insertMessageWithSpinner = (arg) => {
  msgsArr.push(arg);
  hashsArr.push(arg.Hash);
  const messageArea = document.getElementById("messagesArea");

  const li = document.createElement("li");
  li.setAttribute("data-hash", `${arg.Hash}`);
  li.classList.add("rightMsg", "enter");
  li.innerHTML = arg.Message;
  li.append(document.createElement("br"));
  const span = document.createElement("span");
  span.classList.remove("date");
  span.classList.add("spinner");
  li.append(span);
  messageArea.appendChild(li);

  // messageArea.scrollTop = messageArea.scrollHeight;
  messageArea.scrollTo({ top: messageArea.scrollHeight, behavior: "smooth" });
};

export let handleMsgBeforeSend = async (message, roomId) => {
  const arg = {
    RoomUid: roomId,
    Message: message,
    Hash: `${Date.now() + Math.random()}`,
  };

  insertMessageWithSpinner(arg);

  //check if the device is online
  let onLine = await isOnline();

  // check if device is in status "connected" and connected to the internet
  if (connection.state === signalR.HubConnectionState.Connected && onLine)
    await sendMessage(arg);
};

// send message to the room
export const sendMessage = async (arg) => {
  try {
    await connection.invoke("SendMessageToRoom", arg);
  } catch (err) {
    console.error(err);
  }
};

export const constructMsgWithDate = (li, message, messageDate) => {
  li.innerHTML = message;
  li.append(document.createElement("br"));
  const span = document.createElement("span");
  span.classList.remove("spinner");
  span.classList.add("date");
  span.textContent = date(`${messageDate}`);
  li.append(span);
  return li;
};

export const receiveMsg = () => {
  const messageArea = document.getElementById("messagesArea");

  connection.on(
    "ReceiveMessage",
    (id, hash, message, messageDate, userId, roomUid, roomId, isAdmin) => {
      // if there's pending messages
      if (hashsArr.includes(hash)) {
        const msgList = document.querySelectorAll("li[data-hash]");
        const list = [...msgList];

        list.forEach((li) => {
          if (li.getAttribute("data-hash") !== hash) return;

          li.classList.add("rightMsg");
          constructMsgWithDate(li, message, messageDate);

          li.removeAttribute("data-hash");

          const arg = msgsArr.find((msg) => msg.Hash === hash);
          const argIndex = msgsArr.indexOf(arg);
          msgsArr.splice(argIndex, 1);

          const index = hashsArr.indexOf(hash);
          hashsArr.splice(index, 1);
        });

        // messageArea.scrollTop = messageArea.scrollHeight;
        messageArea.scrollTo({
          top: messageArea.scrollHeight,
          behavior: "smooth",
        });
      } else {
        const li = document.createElement("li");
        li.classList.add(`${(!isAdmin ? "rightMsg" : "leftMsg", "enter")}`);

        constructMsgWithDate(li, message, messageDate);
        messageArea.appendChild(li);
        // messageArea.scrollTop = messageArea.scrollHeight;
        messageArea.scrollTo({
          top: messageArea.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  );
};

export const start = async () => {
  if (typeof window !== "object") return;
  const mesgArea = document.getElementById("messagesArea");

  if (connection.state === signalR.HubConnectionState.Connected) return;

  try {
    const roomId = JSON.parse(localStorage.getItem("roomId"));

    handleStatusChange("", false);
    receiveMsg();
    reconnecting();
    reconnected();
    disconnected();
    await connection.start();

    if (!roomId) {
      createRoom();
    } else {
      joinRoom(roomId);
    }

    await getMessages();
  } catch (err) {
    console.log(err);
    // setTimeout(start, 5000);
    if (err?.message?.includes("401")) {
      localStorage.removeItem("user");
      localStorage.removeItem("roomId");

      const closeConnection = async () => {
        await connection.stop();
      };

      closeConnection();
      connection = makeConnection();

      await start();
    } else {
      setTimeout(start, 5000);
    }
  }
};
