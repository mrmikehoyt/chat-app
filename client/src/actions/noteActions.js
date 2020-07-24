import axios from 'axios';
import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  NOTES_LOADING,
} from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const setNotesLoading = () => ({
  type: NOTES_LOADING,
});

export const getNotes = () => (dispatch, getState) => {
  dispatch(setNotesLoading());
  axios
    .get('/api/note', tokenConfig(getState))
    .then((res) => dispatch({
      type: GET_NOTES,
      payload: res.data,
    }))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addNote = (note) => (dispatch, getState) => {
  axios
    .post('/api/note', note, tokenConfig(getState))
    .then((res) => dispatch({
      type: ADD_NOTE,
      payload: res.data,
    }))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteNote = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/note/${id}`, tokenConfig(getState))
    .then(() => dispatch({
      type: DELETE_NOTE,
      payload: id,
    }))
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
