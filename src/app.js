import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MovieList from './containers/movieList/MovieList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MovieList />
      </div>
    </Provider>
  );
};

export default App;
