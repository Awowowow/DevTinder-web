import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "connectionRequest",
  initialState: [],
  reducers: {
    addRequest: (state, action) => {
      return Array.isArray(action.payload) ? action.payload : [];
    },
    removeRequest: (state, action) => {
      return state.filter(req => req._id !== action.payload);
    },
    clearRequests: () => [],
  },
});

export const { addRequest, removeRequest, clearRequests } = requestSlice.actions;
export default requestSlice.reducer;
