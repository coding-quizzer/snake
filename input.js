
let connection;


// setup interface to handle user input from stdin


const setupInput = function(conn) {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => handleUserInput(key));
  
  return stdin;
};

const moveSnake = function (direction) {

  clearInterval(connection.move);
  connection.move = setInterval(() => connection.write(`Move: ${direction}`), 50);
}

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === "w") {
    return moveSnake("up");
  }

  if (key === "a") {
    return console.log("Move: left");
  }

  if (key === "s") {
    return console.log("Move: down");
  }

  if (key === "d") {
    return console.log("Move: right");
  }
}


module.exports = { setupInput };