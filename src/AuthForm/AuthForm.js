import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';

function AuthForm({ buttonName, linkPath, linkName, linkSpan }) {
	return (
		<form className='auth-form'>
			<label className='auth-form__label'>
				Login
				<input
					className='auth-form__input'
					id='login-input'
					type='text'
					autoComplete='none'
					placeholder='Plese enter your login'
				></input>
			</label>

			<label className='auth-form__label'>
				Password
				<input
					className='auth-form__input'
					id='password-input'
					type='password'
					autoComplete='none'
					placeholder='Please enter your password'
				></input>
			</label>
			<button className='auth-form__submit-button' type='submit'>
				{buttonName}
			</button>
			<div className='auth-form__link-container'>
				<span className='auth-form__signup-span'>{linkSpan}</span>
				<Link className='auth-form__signup-link' to={linkPath}>
					{linkName}
				</Link>
			</div>
		</form>
	);
}

export default AuthForm;
