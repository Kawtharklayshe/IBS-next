import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAutherisedFetch,
  postAuthorizedFetch,
} from "../../../services/httpService";
import {
  GetAllWishlistItems,
  AddItemToWishlist,
} from "../../../services/endpoints";
import { toast } from "react-toastify";

/** aysnc action for get wishlist info */
export const getWishlistInfo = createAsyncThunk(
  "wishlist/getWishlistInfo",
  async (args, { rejectWithValue }) => {
    try {
      const res = await getAutherisedFetch(
        GetAllWishlistItems,
        args.merchantID,
        args.locale
      );
      const { data: wishlistData } = await res.json();
      if (args.setLoading) args.setLoading(false);
      return wishlistData;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

/** aysnc action for add item to wishlist */
export const addItemToWishlist = createAsyncThunk(
  "wishlist/addItemToWishlist",
  async (args, { rejectWithValue }) => {
    try {
      const res = await postAuthorizedFetch(
        AddItemToWishlist,
        args.body,
        args.locale
      );
      const { data: wishlistData } = await res.json();
      toast.success("Added Successfully");
      if (args.setLoading) args.setLoading(false);
      return wishlistData;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
