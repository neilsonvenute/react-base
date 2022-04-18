import Proptypes from 'prop-types';
import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Link
        to={{
          pathname: '/login',
          state: { prevPath: rest.location.pathname },
        }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} element={Component} />;
}
MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
    .isRequired,
  isClosed: Proptypes.bool,
};
