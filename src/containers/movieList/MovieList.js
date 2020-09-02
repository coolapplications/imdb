import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../apiCalls';
import SearchBar from '../../components/searchBar/SearchBar';
import MovieCard from '../../components/movieCard/MovieCard';

export function MovieList() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getMovies()), [dispatch]);
  const rows = useSelector((state) => state.moviesReducer.data?.results);
  console.log(rows);
  return (
    <div>
      <SearchBar />
      List:
      {rows?.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.original_title}
          poster={movie.poster_path}
        />
      ))}
    </div>
  );
}

export default MovieList;
