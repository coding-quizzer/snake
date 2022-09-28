net = require('net');
const { IP, port, playerName } = require("./constants");

// establishes a connections with the game server
const connect = function() {

  const conn = net.createConnection({

    host: IP,
    port: port,

  });

  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    
    console.log("Successfully connected to the game server.");

    conn.write(`Name: ${playerName}`);

    conn.move = setInterval(() => conn.write("Move: left"), 50);
    
  });
  
  conn.on("data", (data) => {

    console.log(data);
  });
  

  return conn;
  
};

module.exports = { connect };