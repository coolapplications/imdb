import axios from 'axios';

import { movieListURL, movieSearchURL } from './constants/urls';
import { getMoviesLoading, getMoviesError } from './actions/moviesActions';
import { GET_MOVIES_SUCCESS } from './constants/actionTypes';

export function getMovies() {
  return (dispatch) => {
    dispatch(getMoviesLoading());
    axios
      .get(movieListURL)
      .then((response) =>
        dispatch({ type: GET_MOVIES_SUCCESS, payload: response.data })
      )
      .catch(
        (error) =>
          error.response && dispatch(getMoviesError(error.response.status))
      );
  };
}

export function movieSearch(text) {
  return (dispatch) => {
    dispatch(getMoviesLoading());
    axios
      .get(movieSearchURL + text)
      .then((response) =>
        dispatch({ type: GET_MOVIES_SUCCESS, payload: response.data })
      )
      .catch(
        (error) =>
          error.response && dispatch(getMoviesError(error.response.status))
      );
  };
}
