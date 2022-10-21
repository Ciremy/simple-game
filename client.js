var buffer = require("buffer");
var udp = require("dgram");
const readline = require("readline");
var today = new Date();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// creating a client socket
var client = udp.createSocket("udp4");

//buffer msg
var data = Buffer.from("siddheshrane");

// client.on("message", function (msg, info) {
//   console.log("Data received from server : " + msg.toString());
//   console.log(
//     "Received %d bytes from %s:%d\n",
//     msg.length,
//     info.address,
//     info.port
//   );
// });

//sending msg
// client.send(data, 2222, "localhost", function (error) {
//   if (error) {
//     client.close();
//   } else {
//     console.log("Data sent !!!");
//   }
// });

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

// var data1 = Buffer.from("hello");
// var data2 = Buffer.from("world");

// //sending multiple msg
// client.send([data1, data2], 2222, "localhost", function (error) {
//   if (error) {
//     client.close();
//   } else {
//     console.log("Data sent !!!");
//   }
// });
