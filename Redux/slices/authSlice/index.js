import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./aysncActions";
const initialState = {
  loading: false,
  data: null,
  isSuccess: false,
  isLogged: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => action.payload,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isLogged = true;
      state.isSuccess = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isLogged = false;
      state.isSuccess = false;
    });
    // sign up action

    builder.addCase(signup.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isLogged = true;
      state.isSuccess = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isLogged = false;
      state.isSuccess = false;
    });
  },
});

export default authSlice.reducer;

export const { updateUserInfo } = authSlice.actions;
