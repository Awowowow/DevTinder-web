import io from "socket.io-client";
import { BASE_URL } from "./constants";

export const createSocketConnection = () => {
    const token = localStorage.getItem("token");
    return io(BASE_URL,{
        withCredentials: true
    });
};