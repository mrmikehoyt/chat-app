const messages = [];

// Add a new message to the state
const addMessage = (newMessage) => {
  const index = messages.findIndex((message) => message.id === newMessage.id);
  if (index < 0) {
    messages.push(newMessage);
    return "Message added successfully!";
  }

  return "Message not added!";
}

// Return users message in time order
const getMessages = (userCreatedTime) => {
  return messages.filter((message) => message.time >= userCreatedTime);
}

// Return a single message by id
const getMessage = (id) => {
  const index = messages.findIndex((message) => message.id === id);
  if (index >= 0) {
    return messages[index];
  }
  return "Message Not Found!";
}

module.exports = { addMessage, getMessages, getMessage };
