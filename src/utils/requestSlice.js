import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "connectionRequest",
    initialState: [],
    reducers:{
        addRequest: (state,action) =>{
            return action.payload
        },
        removeFeed: (state, action) => {
            return state.filter(req => req._id !== action.payload);
        },
    }
})

export const {addRequest,removeFeed} = requestSlice.actions;

export default requestSlice.reducer;
