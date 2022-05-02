import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

function Login() {
	return (
		<section>
			<AuthForm buttonName='Login' linkPath='/signup' linkName='Register' />
		</section>
	);
}

export default Login;
