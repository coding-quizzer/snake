const {cannedMessages, directions} = require("./constants");
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
};

const writeMessage = function (key) {
  connection.write(`Say: ${cannedMessages[key]}`);
};

const controlMovement = (direction) => moveSnake(direction, directions[direction].delay);


const handleUserInput = function (key) {

  if (key === '\u0003') {
    process.exit();
  }

  for (let direction in directions) {
    let dirObject = directions[direction];
    if (dirObject.key === key) {
      return controlMovement(direction);
    }
  }

  if (Object.keys(cannedMessages).includes(key)) {
      return writeMessage(key);
  }
}


module.exports = { setupInput };