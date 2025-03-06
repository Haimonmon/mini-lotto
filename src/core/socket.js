import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:3000"; // Backend Socket.IO Server

const socket = io(SOCKET_SERVER_URL, {
    transports: ["websocket"],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 3000,
});

export default socket;