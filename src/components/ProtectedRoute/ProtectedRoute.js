import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
	return <Route>{() => (props.isLoggedIn ? <Component {...props} /> : <Redirect to='/signin' />)}</Route>;
}

export default ProtectedRoute;
