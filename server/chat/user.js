const users = [];

const generateUser = () => {
  const userNum = Math.round(Math.random() * 1000);
  const userName = `User ${userNum}`;
  return userName;
}

const getUsers = () => {
  return users;
}

const addUser = (socket) => {
  const createdUser = generateUser();
  const userIndex = users.findIndex((user) => user.name === createdUser);
  if (userIndex >= 0) {
    addUser(socket);
  } else {
    users.push({
      socketId: socket.id,
      name: createdUser,
      joined: new Date(socket.handshake.time).getTime()
    });
  }
  return createdUser;
}

const removeUser = (socketId) => {
  const userIndex = users.findIndex((user) => user.socketId === socketId);
  if (userIndex >= 0) {
      const userName = users[userIndex].name;
      users.splice(userIndex, 1);
      return `User with name ${userName} has left the chat`;
  }
  return `User with socketId ${socketId} not found`;
}


module.exports = { addUser, getUsers, removeUser };
