var net = require("net");
var server = net.createServer();

server.on("connection", function (socket) {
  //Stuff happens in here
});
server.listen(process.env.PORT || 6969, function (data) {
  console.log("Server is listening to %j", server.address());
});
