import axios from 'axios';

import {
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
} from '../constants/actionTypes';

export function getMoviesLoading() {
  return {
    type: GET_MOVIES_LOADING,
  };
}

export function getMoviesSuccess() {
  return {
    type: GET_MOVIES_SUCCESS,
    payload,
  };
}

export function getMoviesError(error) {
  return {
    type: GET_MOVIES_ERROR,
    error,
  };
}
