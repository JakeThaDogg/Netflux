/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from '@material-ui/core';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import { searchMovies, loadMovies } from './actions';
import {
  makeSelectTitle,
  makeSelectError,
  makeSelectLoading,
} from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <h2>
          <FormattedMessage {...messages.explain} />
        </h2>
        <form onSubmit={this.props.onSubmitTitle}>
          <Input
            id="searchTitle"
            placeholder="Search a movie here"
            onChange={this.props.onChangeMovie}
          />
          <Button>Submit</Button>
        </form>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeMovie: e => dispatch(searchMovies(e.target.value)),
    onSubmitTitle: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadMovies());
    },
  };
}

HomePage.propTypes = {
  onSubmitTitle: PropTypes.func,
  onChangeMovie: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  searchTitle: makeSelectTitle,
  loading: makeSelectLoading,
  error: makeSelectError,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
