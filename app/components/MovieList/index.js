import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@material-ui/core';

function MovieList(props) {
  if (props.movies) {
    return (
      <div>
        <h2>Total results {props.movies.totalResults}</h2>
        <List>
          {props.movies.Search.map(movie => (
            <ListItem key={movie.imdbID}>
              <ListItemText>
                {movie.Title},{movie.Year}
              </ListItemText>
              <ListItemAvatar>
                <img src={movie.Poster} alt={movie.Title} />
              </ListItemAvatar>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
  return (
    <div>
      <h2>Nothing found</h2>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.any,
};

export default MovieList;
