import React, { useState } from 'react';
import { searchBarStyles } from '../../styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { movieSearch } from '../../apiCalls';

export default function SearchBar() {
  const [newText, onChangeText] = useState('');
  const dispatch = useDispatch();
  const classes = searchBarStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          ></IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            SHOW
          </Typography>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <div className={classes.search}>
            <InputBase
              placeholder='Search…'
              onChange={(event) => {
                onChangeText(event.target.value);
                dispatch(movieSearch(newText));
              }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
