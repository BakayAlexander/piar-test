import React from 'react';
import './AdminForm.css';

function AdminForm({ onSubmit, buttonName, title, ...props }) {
	return (
		<form className='admin-form' onSubmit={onSubmit}>
			<h2 className='admin-form__title'>{title}</h2>
			{props.children}
			<button className='admin-form__submit-button' type='submit'>
				{buttonName}
			</button>
		</form>
	);
}

export default AdminForm;
