import axios from 'axios';

import url from './constants/url';
import { getMoviesLoading, getMoviesError } from './actions/moviesActions';
import { GET_MOVIES_SUCCESS } from './constants/actionTypes';

export function getMovies() {
  return (dispatch) => {
    dispatch(getMoviesLoading());
    axios
      .get(url)
      .then((response) =>
        dispatch({ type: GET_MOVIES_SUCCESS, payload: response.data })
      )
      .catch(
        (error) =>
          error.response && dispatch(getMoviesError(error.response.status))
      );
  };
}
