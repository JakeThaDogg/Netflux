import { makeSelectTitle } from 'containers/HomePage/selectors';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_MOVIES } from './constants';
import { moviesLoaded, movieLoadingError } from './actions';

export function* searchMovies() {
  const movieTitle = yield select(makeSelectTitle());
  const requestURL = `http://www.omdbapi.com/?apikey=a69f8b6&s=${movieTitle}`;

  try {
    const movies = yield call(request, requestURL);
    yield put(moviesLoaded(movies, movieTitle));
  } catch (err) {
    yield put(movieLoadingError(err));
  }
}

export default function* apiData() {
  yield takeLatest(LOAD_MOVIES, searchMovies);
}
