import { createStore, applyMiddleware, combineReducers } from 'redux';
import moviesReducer from './reducers/moviesReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({ moviesReducer });
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
