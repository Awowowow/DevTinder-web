import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => {
      return Array.isArray(action.payload) ? action.payload : [];
    },
    removeFeed: (state, action) => {
      if (!Array.isArray(state)) return [];
      return state.filter(user => user && user._id !== action.payload);
    },
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
