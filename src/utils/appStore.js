import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedRecuder from "./feedSlice";
import connectionRequestReducer from "./requestSlice";
import connectionReducer from "./connectionSlice"
import toUserReducer from "./toUserSlice"
const appStore = configureStore({
    reducer: {
        user: userReducer,
        toUser: toUserReducer,
        feed: feedRecuder,
        connectionRequest: connectionRequestReducer,
        connections: connectionReducer
    },
});

export default appStore
