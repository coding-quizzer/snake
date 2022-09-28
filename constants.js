const IP = "165.227.47.243";
const port = "50541";
const playerName = "WRG"

const cannedMessages = {
  t: "hello world",
  h: "hello",
  b: "goodbye"
};

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


module.exports = { IP, port, playerName, cannedMessages, directions };