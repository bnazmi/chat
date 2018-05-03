const app = require("./app");

var http = require("http").Server(app);
var io = require("socket.io")(http);
io.set('transports', ['xhr-polling']);
io.set('polling duration', 10);

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {});
});

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
  });
});

http.listen(app.get("port"), function() {
  console.log("listening on ", app.get("port"));
});
