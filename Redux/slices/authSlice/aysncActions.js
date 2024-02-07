import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpPost, postAuthorizedFetch } from "../../../services/httpService";
import { LOGIN, POST_NEW_USER } from "../../../services/endpoints";
import {
  setJWT,
  setRefreshToken,
  setUserInfo,
  checkOneAuthWay,
} from "../../../utilies/utiliesFuctions";
import { toast } from "react-toastify";

/** aysnc action for log in*/
export const login = createAsyncThunk(
  "auth/login",
  async (args, { rejectWithValue }) => {
    try {
      const res = await postAuthorizedFetch(LOGIN, args.body, args.locale);
      const { data: userData, code, message } = await res.json();
      if (args.setLoading) args.setLoading(false);
      if (code === 200) {
        setUserInfo(userData);
        setJWT(userData.token.accessToken);
        setRefreshToken(userData.token.refreshTokenValue);
        checkOneAuthWay();
        if (args.callBack) args.callBack();
      } else {
        if (args.callBack) args.callBack(false, args.body.email);
        toast.error(message);
      }
      return userData;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

/** aysnc action for sign up*/
export const signup = createAsyncThunk(
  "auth/signup",
  async (args, { rejectWithValue }) => {
    try {
      const res = await SignUpPost(args.body, args.image, POST_NEW_USER);
      const { data: userData, code, message } = await res.json();
      if (code === 200) {
        setUserInfo(userData);
        setJWT(userData.token.accessToken);
        setRefreshToken(userData.token.refreshTokenValue);
        if (args.callBack) args.callBack();
      } else toast.error(message);
      if (args.setLoading) args.setLoading(false);
      return userData;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
