import {
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
} from '../constants/actionTypes';

const initialState = {
  loading: false,
  success: false,
  data: {},
  successMessage: false,
  error: null,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        success: true,
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
