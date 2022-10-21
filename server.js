const config = require("./conf.json");

var udp = require("dgram");
var server = udp.createSocket("udp4");
let xPos = 0;
let yPos = 0;

server.on("error", function (error) {
  console.log("Error: " + error);
  server.close();
});

server.on("message", function (msg, info) {
  console.log(msg.toString());

  console.log(
    "Received %d bytes from %s:%d\n",
    msg.length,
    info.address,
    info.port
  );

  let direction = msg.toString().split(",")[3];
  console.log(direction);
  switch (direction) {
    case "h":
      xPos += 1;
      break;
    case "b":
      xPos -= 1;
      break;
    case "d":
      yPos += 1;
      break;
    case "g":
      yPos -= 1;
      break;
    default:
      break;
  }
  console.log("xPos: " + xPos + " yPos: " + yPos);
});

server.on("listening", function () {
  var address = server.address();
  var port = address.port;
  var family = address.family;
  var ipaddr = address.address;
  console.log("Server is listening at port :" + port);
  console.log("Server ip :" + ipaddr);
  console.log("Server is IP4/IP6 : " + family);
});

server.on("close", function () {
  console.log("Socket is closed !");
});

server.bind(config.host.port);

// setTimeout(function () {
//   server.close();
// }, 8000);
