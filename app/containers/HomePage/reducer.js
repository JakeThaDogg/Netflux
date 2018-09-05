import { fromJS } from 'immutable';

import {
  SEARCH_MOVIES,
  LOAD_MOVIES,
  LOAD_MOVES_ERROR,
  LOAD_MOVIES_SUCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  currentMovie: false,
  searchTitle: '',
  userData: {
    movies: false,
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return state.set('searchTitle', action.movie);
    case LOAD_MOVIES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'movies'], false);
    case LOAD_MOVIES_SUCESS:
      return state
        .setIn(['userData', 'movies'], action.movies)
        .set('loading', false)
        .set('currentMovie', action.searchTitle);
    case LOAD_MOVES_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
