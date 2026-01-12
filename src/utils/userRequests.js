import axios from "axios";
import { BASE_URL } from "./constants";

export const sendLikeRequest = (_id) => {
  return axios.post(
    `${BASE_URL}/request/send/interested/${_id}`,
    {},
    { withCredentials: true }
  );
};

export const sendPassRequest = (_id) => {
  return axios.post(
    `${BASE_URL}/request/send/ignored/${_id}`,
    {},
    { withCredentials: true }
  );
};
