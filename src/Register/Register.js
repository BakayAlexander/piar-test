import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css';

function Register() {
	return (
		<section className='register'>
			<h2 className='register__title'>Join our family! Please sign up!</h2>
			<AuthForm buttonName='Register' linkPath='/signin' linkSpan={`Already registered?`} linkName='Sign in' />
		</section>
	);
}

export default Register;
