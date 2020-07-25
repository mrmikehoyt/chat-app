/* eslint-disable no-param-reassign */
import { setAutoFreeze, original, produce } from 'immer';
import {
  WS_RECEIVE_MESSAGE,
  WS_SET_USERNAME_SUCCESS,
  WS_SOCKET_ID,
} from '../actions/types';

setAutoFreeze(false);

const initialState = {
  messages: [],
  username: '',
  socketId: '',
};

export default produce((draft, action) => {
  switch (action.type) {
    case WS_SOCKET_ID: {
      const { socketId } = action.payload;
      draft.socketId = socketId;
      break;
    }
    case WS_SET_USERNAME_SUCCESS: {
      const { username } = action.payload;
      draft.username = username;
      break;
    }
    case WS_RECEIVE_MESSAGE: {
      const { message } = action.payload;
      const { messages: existingMessages } = original(draft);
      const messageIndex = existingMessages.findIndex(
        (msg) => msg.id === message.id,
      );
      if (messageIndex < 0) {
        existingMessages.push(message);
      }
      draft.messages = [...existingMessages];
      break;
    }
    default:
      break;
  }
}, initialState);
