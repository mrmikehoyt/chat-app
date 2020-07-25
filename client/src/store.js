import { createStore, applyMiddleware, compose } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import thunk from 'redux-thunk';
import pkg from '../package.json';
import rootReducer from './reducers';

const initialState = {};
const socket = io(pkg.proxy);
const socketIoMiddleware = createSocketIoMiddleware(socket, 'WS_');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, socketIoMiddleware)),
);

export default store;
