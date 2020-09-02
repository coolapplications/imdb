import React from 'react';
import { cardStyles } from '../../styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function MovieCard(props) {
  const classes = cardStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w300/${props.poster}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
