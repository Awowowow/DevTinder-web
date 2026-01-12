import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedRecuder from "./feedSlice";
import connectionRequestReducer from "./requestSlice";
import connectionReducer from "./connectionSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedRecuder,
        connectionRequest: connectionRequestReducer,
        connections: connectionReducer
    },
});

export default appStore
