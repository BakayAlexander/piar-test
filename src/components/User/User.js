import React from 'react';
import './User.css';

function User({ id, name, comment, login, password, createdAt, updatedAt, onDelete, onClickEdit }) {
	function handleDelete(e) {
		e.preventDefault();
		onDelete(id);
	}

	function handleEdit(e) {
		e.preventDefault();
		onClickEdit(id, name, comment, login);
	}

	return (
		<li className='user'>
			<div className='user__buttons-container'>
				<button className='user__button-delete' onClick={handleDelete}></button>
				<button className='user__button-edit' onClick={handleEdit}></button>
			</div>
			<h2 className='user__title'>User name: {name}</h2>

			<ul className='user__text-container'>
				<p className='user__text'>Login: {login}</p>
				<p className='user__text'>Comment: {comment}</p>
				<p className='user__text'>Id: {id}</p>
				<p className='user__text'>Created at: {createdAt}</p>
				{updatedAt ? (
					<p className='user__text'>Updated at: {updatedAt}</p>
				) : (
					<p className='user__text'>Haven't updated yet</p>
				)}
			</ul>
		</li>
	);
}

export default User;
