import React from 'react';
import './Station.css';

function Station({ id, name, comment, createdAt, updatedAt, login, onDeleteStation }) {
	function handleDelete(e) {
		e.preventDefault();
		onDeleteStation(id);
	}

	return (
		<li className='station'>
			<div className='station__title-container'>
				<h2 className='station__title'>Name of station: {name}</h2>
				<div>
					<button className='station__button-delete' onClick={handleDelete}></button>
					<button className='station__button-edit'></button>
				</div>
			</div>
			<ul className='station__text-container'>
				<p className='station__text'>Comment: {comment}</p>
				<p className='station__text'>Id: {id}</p>
				<p className='station__text'>Created at: {createdAt}</p>
				<p className='station__text'>Updated at: {updatedAt}</p>
				<p className='station__text'>Owner: {login}</p>
			</ul>
		</li>
	);
}

export default Station;
