import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  data: null,
  isSuccess: false,
  error: "",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    resetCurrency: (state, action) => initialState,
    updateCurrency: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default currencySlice.reducer;
export const { updateCurrency, resetCurrency } = currencySlice.actions;
