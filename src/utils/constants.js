const configuredApiUrl = import.meta.env.VITE_API_BASE_URL?.trim();
const configuredSocketUrl = import.meta.env.VITE_SOCKET_URL?.trim();
const configuredSocketPath = import.meta.env.VITE_SOCKET_PATH?.trim();

export const BASE_URL =
  configuredApiUrl ||
  (location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? "http://localhost:7777"
    : "/api");

export const SOCKET_URL =
  configuredSocketUrl ||
  (BASE_URL.startsWith("http") ? BASE_URL : location.origin);

export const SOCKET_PATH = configuredSocketPath || "/socket.io";
