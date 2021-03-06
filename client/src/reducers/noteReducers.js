/* eslint-disable no-underscore-dangle */

import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  NOTES_LOADING,
} from '../actions/types';

const initialState = {
  notes: [],
  loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes.notes, action.payload],
      };
    case NOTES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
