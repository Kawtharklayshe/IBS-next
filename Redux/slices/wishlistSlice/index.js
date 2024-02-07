import { createSlice } from "@reduxjs/toolkit";
import { getWishlistInfo, addItemToWishlist } from "./aysncActions";
const initialState = {
  loading: false,
  data: null,
  isSuccess: false,
  error: "",
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    removeFromWishlist: (state, action) => {
      state.data.items = state.data.items.filter(
        (item) => item.id != action.payload
      );
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getWishlistInfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getWishlistInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(getWishlistInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSuccess = false;
    });

    // add item to wishlist
    builder.addCase(addItemToWishlist.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addItemToWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(addItemToWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSuccess = false;
    });
  },
});

export const { removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
