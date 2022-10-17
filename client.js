var net = require("net");

var client = net.createConnection({ port: 6969 }, () => {
  console.log("connected to server!");
  client.write("world!\r");
});

client.on("data", (data) => {
  console.log(data.toString());
  client.end();
});

client.on("end", () => {
  console.log("disconnected from server");
});
