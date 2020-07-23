import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';
import noteReducer from './noteReducers';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  item: noteReducer,
});
