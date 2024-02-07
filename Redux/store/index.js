import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import wishlist from "../slices/wishlistSlice";
import cart from "../slices/cartSlice";
import auth from "../slices/authSlice";
import currency from "../slices/currencySlice";

const combinedReducer = combineReducers({
  auth,
  wishlist,
  cart,
  currency,
});

const masterReducer = (state, action) => {
  if (action.type == HYDRATE) {
    const nextState = {
      ...state, // use previous state, PS: in case we need to update state when fetching data with server side or initial props, then we need to define how should reducer update this state, so we have to mention the reducer and write the logic needed after this cloning previous state
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
