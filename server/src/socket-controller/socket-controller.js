const establishSocketConnection = (socket, io) => {
  console.log("Cliente conectado");

  socket.on("counter", (data) => {
    console.log(data);
    io.emit("response", data);
  });

  socket.on("users", (data) => {
    io.emit("users", data);
  });
};

module.exports = establishSocketConnection;
