const users = [];
const establishSocketConnection = (socket, io) => {
  console.log("Cliente conectado");

  socket.on("counter", (data) => {
    console.log(data);
    io.emit("response", data);
  });

  users.push(socket.id);
  io.emit("users", users);
};

module.exports = establishSocketConnection;
