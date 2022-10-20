function connectToServer(tid, ip) {
  var conn = net.createConnection(23, ip);

  var completeData = "";

  conn.on("connect", function () {
    conn.write(login_string);
  });
  conn.on("data", function (data) {
    var read = data.toString();

    if (read.match(/Login Successful/)) {
      console.log("Connected to " + ip);

      conn.write(command_string);
    } else {
      completeData += read;
    }

    if (completeData.match(/Command OK/)) {
      if (completeData.match(/\r\nEND\r\n/)) {
        console.log("Response: " + completeData);
      }
    }
  });
  conn.on("end", function () {
    console.log("Connection closed to " + ip);
  });
  conn.on("error", function (err) {
    console.log("Connection error: " + err + " for ip " + ip);
  });
}
