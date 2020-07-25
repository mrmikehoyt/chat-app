const { v4 } = require("uuid");

const createMessage = (message) => {
  return {
    author: 'System',
    id: v4(),
    time: new Date().getTime(),
    message: message,
    socketId: "",
  }
}

module.exports = createMessage;
