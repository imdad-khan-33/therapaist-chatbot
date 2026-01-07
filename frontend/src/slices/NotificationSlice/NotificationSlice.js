// src/slices/notificationSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState: {
    list: [],
  },
  reducers: {
    addNotification: (state, action) => {
        console.log("Notification received:", action.payload);
      state.list.unshift(action.payload);
    },
    clearNotifications: (state) => {
      state.list = [];
    },
  },
});

export const { addNotification, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
