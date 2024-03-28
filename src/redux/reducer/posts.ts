import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

// Part 2
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list:[],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    postsRecieved: (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
    },
    postsFaild: (state: any, action: PayloadAction<any>) => {
      state.list = [];
      state.lastFetch = Date.now();
    },
  },
});

export const getProductsAction = () =>
  apiCallBegan({
    url: "/api/posts/",
    onSuccess: "posts/postsRecieved",
    onError: "posts/postsFaild",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const { postsRecieved,postsFaild } = postsSlice.actions;
export default postsSlice.reducer;
