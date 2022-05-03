import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

function Login({ onSubmit, ...props }) {
	return (
		<section className='login'>
			<h2 className='login__title'>Welcome! Please sign in.</h2>
			<AuthForm
				isRegisterForm={false}
				buttonName='Login'
				linkPath='/signup'
				linkSpan={`Hasn't registered yet?`}
				linkName='Register'
				onSubmit={onSubmit}
			/>
		</section>
	);
}

export default Login;
