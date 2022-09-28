
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

const moveSnake = function (direction, timeInterval) {

  clearInterval(connection.move);
  connection.move = setInterval(() => connection.write(`Move: ${direction}`), timeInterval);
}

const handleUserInput = function (key) {
  const leftRightInverval = 50;
  const upDownInterval = 60;
  if (key === '\u0003') {
    process.exit();
  }

  if (key === "w") {
    return moveSnake("up", upDownInterval);
  }

  if (key === "a") {
    return moveSnake("left", leftRightInverval);
  }

  if (key === "s") {
    return moveSnake("down", upDownInterval);
  }

  if (key === "d") {
    return moveSnake("right", leftRightInverval);
  }
}


module.exports = { setupInput };