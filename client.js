var buffer = require("buffer");
var udp = require("dgram");
const readline = require("readline");
var today = new Date();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var client = udp.createSocket("udp4");

rl.on("line", (input) => {
  let payload = "";
  switch (input) {
    case "haut":
      payload = `${input.length},m,${today.toISOString()},h`;
      break;
    case "bas":
      payload = `${input.length},m,${today.toISOString()},b`;
      break;
    case "gauche":
      payload = `${input.length},m,${today.toISOString()},g`;
      break;
    case "droite":
      payload = `${input.length},m,${today.toISOString()},d`;
      break;
    default:
      break;
  }

  client.send(payload, 2222, "localhost", function (error) {
    if (error) {
      client.close();
    } else {
      console.log("Data sent !!!");
    }
  });
});
