
let connection;

const cannedMessages = {
  t: "hello world",
  h: "hello",
  b: "goodbye"
};

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

const handleUserInput = function (key) {
  const directions = {
    up: {
      delay: 60,
      key: "w"
    },

    down: {
      delay: 60,
      key: "s",
    },

    right: {
      delay: 50,
      key: "d", 
    },

    left: {
      delay: 50,
      key: "a"
    }
  }

  
  

  const controlMovement  = function (key, direction) {
    const dirObject = directions[direction];

    if (key === dirObject.key) {
      return moveSnake(direction, dirObject.delay)
    }
  };

  if (key === '\u0003') {
    process.exit();
  }

  for (let index in directions) {
    let dir = directions[index];
    if (dir.key === key) {
      return controlMovement(key, index);
    }
  }

  if (Object.keys(cannedMessages).includes(key)) {
      return writeMessage(key);
  }
}


module.exports = { setupInput };