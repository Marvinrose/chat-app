import io from "socket.io-client";

let socket;

const connectSocket = (user_id) => {
  socket = io("https://chat-app-server-rpwp.onrender.com", {
    query: `user_id=${user_id}`,
  });
};

export { socket, connectSocket };
