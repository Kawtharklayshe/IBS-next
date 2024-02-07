import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAutherisedFetch,
  DeleteAuthorizedFetch,
  postAuthorizedFetch,
  putAuthorizedFetch,
} from "../../../services/httpService";
import {
  GetAllCartItems,
  AddItemToCart,
  UpdateCartItemQty,
  DeleteSpecificCartItem,
} from "../../../services/endpoints";
import { toast } from "react-toastify";

/** aysnc action for get and update cart info */
export const getCartInfo = createAsyncThunk(
  "cart/getCartInfo",
  async (args, { rejectWithValue }) => {
    try {
      const res = await getAutherisedFetch(
        GetAllCartItems,
        args.merchantID,
        args.locale
      );
      const { data: cartData } = await res.json();
      return cartData;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

/** aysnc action for add item to cart */
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (args, { rejectWithValue }) => {
    try {
      const res = await postAuthorizedFetch(
        AddItemToCart,
        args.body,
        args.locale
      );
      const { data: cartData } = await res.json();
      toast.success("Added Successfully To Cart");
      if (args.setLoading) args.setLoading(false);
      return cartData;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

/** aysnc action for increase item qty */
export const increaseCartItemQty = createAsyncThunk(
  "cart/increaseCartItemQty",
  async (args, { rejectWithValue }) => {
    try {
      const res = await putAuthorizedFetch(
        UpdateCartItemQty(args.cartItemId),
        args.body,
        args.locale
      );
      const { data: cartData } = await res.json();
      toast.success("Updated Successfully");
      if (args.setLoading) args.setLoading(false);
      return cartData;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

/** aysnc action for decrease item qty */
export const decreaseCartItemQty = createAsyncThunk(
  "cart/decreaseCartItemQty",
  async (args, { rejectWithValue }) => {
    try {
      const res = await putAuthorizedFetch(
        UpdateCartItemQty(args.cartItemId),
        args.body,
        args.locale
      );
      const { data: cartData } = await res.json();
      toast.success("Updated Successfully");
      if (args.setLoading) args.setLoading(false);
      return cartData;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

/** aysnc action for delete item from cart */
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (args, { rejectWithValue }) => {
    try {
      const res = await DeleteAuthorizedFetch(
        DeleteSpecificCartItem(args.cartItemId),
        args.merchantID,
        args.locale
      );
      const { data: cartData } = await res.json();
      toast.success("Deleted Successfully");
      return cartData;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
