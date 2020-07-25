import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';
import noteReducer from './noteReducers';
import chatReducer from './chatReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  item: noteReducer,
  chat: chatReducer,
});
