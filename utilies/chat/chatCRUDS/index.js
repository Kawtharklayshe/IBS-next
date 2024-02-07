import {
  postChatFetch,
  getFetchAllMsgs,
  getFetchUnreadMsgs,
} from "../../../services/httpService";
import {
  AddGuestUserUrl,
  roomMessagesUrl,
  roomUnreadMessagesUrl,
} from "../../../services/endpoints";

// for unregistered users
export const addStrangeUser = async () => {
  const body = {
    firebaseToken: "string",
  };

  const res = await postChatFetch(AddGuestUserUrl, body);

  if (!res?.isSuccess) return null;

  const { data: { id, token: { accessToken } = {} } = {} } = res;
  let user = { id, accessToken };
  user = JSON.stringify(user);

  // REMEMBER THIS USER
  localStorage.setItem("user", user);

  // return res;
};

// get previous chats for specific user
// uid: room id
// messageId: id the last message in the chat box
export const getRoomMessages = async (uid, messageId) => {
  const res = await getFetchAllMsgs(roomMessagesUrl, uid, messageId);
  return res;
};

//get unread messages
export const getUnreadMsgs = async (uid) => {
  const res = await getFetchUnreadMsgs(roomUnreadMessagesUrl, uid);
  if (!res?.isSuccess) return 0;

  const { data: { unReadMessagesCount = 0 } = {} } = res;

  return unReadMessagesCount;
};
