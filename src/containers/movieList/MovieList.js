import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../apiCalls';

export function MovieList() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getMovies()), [dispatch]);
  const rows = useSelector((state) => state.moviesReducer.data?.results);
  console.log(rows);
  return (
    <div>
      List:
      {rows?.map((movie) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
}

export default MovieList;
