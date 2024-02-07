import { createSlice } from "@reduxjs/toolkit";
import {
  getCartInfo,
  addToCart,
  increaseCartItemQty,
  decreaseCartItemQty,
  removeFromCart,
} from "./aysncActions";
const initialState = {
  loading: false,
  data: null,
  isSuccess: false,
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state, action) => initialState,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCartInfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCartInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(getCartInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSuccess = false;
    });
    // adding item to cart
    builder.addCase(addToCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSuccess = false;
    });
    // increase item Qty
    builder.addCase(increaseCartItemQty.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(increaseCartItemQty.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(increaseCartItemQty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSuccess = false;
    });
    // decrease item Qty
    builder.addCase(decreaseCartItemQty.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(decreaseCartItemQty.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(decreaseCartItemQty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSuccess = false;
    });
    // remove item from cart
    builder.addCase(removeFromCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSuccess = false;
    });
  },
});

export default cartSlice.reducer;
export const { resetCart } = cartSlice.actions;
