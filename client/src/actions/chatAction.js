import {
  WS_RECEIVE_MESSAGE,
  WS_SEND_MESSAGE,
} from './types';

export const receiveMessage = (message) => ({
  type: WS_RECEIVE_MESSAGE,
  payload: {
    message,
  },
});

export const sendMessage = (message) => ({
  type: WS_SEND_MESSAGE,
  payload: {
    message,
  },
});
