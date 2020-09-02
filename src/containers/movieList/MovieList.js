import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../apiCalls';
import SearchBar from '../../components/searchBar/SearchBar';
import MovieCard from '../../components/movieCard/MovieCard';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export function MovieList() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getMovies()), [dispatch]);
  const rows = useSelector((state) => state.moviesReducer.data?.results);
  const classes = useStyles();
  return (
    <div>
      <SearchBar />

      <br />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={10}>
            {rows?.map((movie) => (
              <Grid key={movie.id} item xs={4} sm={4}>
                <MovieCard
                  title={movie.original_title}
                  poster={movie.poster_path}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MovieList;
