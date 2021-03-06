import {
  SEARCH_MOVIES,
  LOAD_MOVIES,
  LOAD_MOVIES_SUCESS,
  LOAD_MOVES_ERROR,
} from './constants';

export function searchMovies(movie) {
  return {
    type: SEARCH_MOVIES,
    movie,
  };
}

export function loadMovies() {
  return {
    type: LOAD_MOVIES,
  };
}

export function moviesLoaded(movies, searchTitle) {
  return {
    type: LOAD_MOVIES_SUCESS,
    movies,
    searchTitle,
  };
}

export function movieLoadingError(error) {
  return {
    type: LOAD_MOVES_ERROR,
    error,
  };
}
