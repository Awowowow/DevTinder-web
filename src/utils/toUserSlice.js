import { createSlice } from "@reduxjs/toolkit";

const toUserSlice = createSlice({
  name: "toUser",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => null,
  },
});

export const { addUser, removeUser } = toUserSlice.actions;
export default toUserSlice.reducer;
