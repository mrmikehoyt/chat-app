import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

export const tokenConfig = (getState) => {
  // Getting the token from localStorage
  const { token } = getState().auth;

  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    requestOptions.headers['x-auth-token'] = token;
  }

  return requestOptions;
};

// Logout User
export const logout = () => ({
  type: LOGOUT_SUCCESS,
});

// Checking the token and login the user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios.get('/api/user', tokenConfig(getState)).then((res) => dispatch({
    type: USER_LOADED,
    payload: res.data,
  }))
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios.post('/api/login', body, config).then((response) => dispatch({
    type: LOGIN_SUCCESS,
    payload: response.data,
  }))
    .catch((error) => {
      dispatch(
        returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL'),
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const register = ({ name, email, password }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post('/api/register/', body, config)
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch(
        returnErrors(error.response.data, error.response.status, 'REGISTER_FAIL'),
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};
