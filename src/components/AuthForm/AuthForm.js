import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';

function AuthForm({ isRegisterForm, buttonName, linkPath, linkName, linkSpan, onSubmit, ...props }) {
	const [name, setName] = React.useState('');
	const [comment, setComment] = React.useState('');
	const [login, setLogin] = React.useState('');
	const [password, setPassword] = React.useState('');

	function handleChangeName(e) {
		setName(e.target.value);
	}
	function handleChangeComment(e) {
		setComment(e.target.value);
	}

	function handleChangeLogin(e) {
		setLogin(e.target.value);
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		isRegisterForm ? onSubmit(name, comment, login, password) : onSubmit(login, password);
	}

	return (
		<form className='auth-form' onSubmit={handleSubmit}>
			{isRegisterForm && (
				<>
					<label className='auth-form__label'>
						Name
						<input
							className='auth-form__input'
							id='name-input'
							type='text'
							autoComplete='none'
							placeholder='Plese enter your login'
							value={name ?? ''}
							onChange={handleChangeName}
						></input>
					</label>

					<label className='auth-form__label'>
						Comment
						<input
							className='auth-form__input'
							id='comment-input'
							type='text'
							autoComplete='none'
							placeholder='Please enter your password'
							value={comment ?? ''}
							onChange={handleChangeComment}
						></input>
					</label>
				</>
			)}
			<label className='auth-form__label'>
				Login
				<input
					className='auth-form__input'
					id='login-input'
					type='text'
					autoComplete='none'
					placeholder='Plese enter your login'
					value={login ?? ''}
					onChange={handleChangeLogin}
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
					value={password ?? ''}
					onChange={handleChangePassword}
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
