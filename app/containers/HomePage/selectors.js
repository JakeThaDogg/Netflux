import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectTitle = () =>
  createSelector(selectHome, homeState => homeState.get('searchTitle'));

const makeSelectLoading = () =>
  createSelector(selectHome, homeState => homeState.get('loading'));

const makeSelectError = () =>
  createSelector(selectHome, homeState => homeState.get('error'));

const makeSelectMovies = () =>
  createSelector(selectHome, homeState =>
    homeState.getIn(['userData', 'movies']),
  );

export {
  selectHome,
  makeSelectTitle,
  makeSelectLoading,
  makeSelectError,
  makeSelectMovies,
};
