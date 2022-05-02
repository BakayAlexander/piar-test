import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

function Login() {
	return (
		<section className='login'>
			<h2 className='login__title'>Welcome! Please sign in.</h2>
			<AuthForm buttonName='Login' linkPath='/signup' linkSpan={`Hasn't registered yet?`} linkName='Register' />
		</section>
	);
}

export default Login;
