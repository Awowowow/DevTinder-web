import io from "socket.io-client";
import { SOCKET_PATH, SOCKET_URL } from "./constants";

export const createSocketConnection = () => {
    return io(SOCKET_URL, {
        path: SOCKET_PATH,
        withCredentials: true,
        transports: ["websocket", "polling"],
    });
};
