import React from 'react';
import './Station.css';

function Station({ id, name, comment, createdAt, updatedAt, onDeleteStation, onClickEditStation }) {
	function handleDelete(e) {
		e.preventDefault();
		onDeleteStation(id);
	}

	function handleEdit(e) {
		e.preventDefault();
		onClickEditStation(id, name, comment);
	}

	return (
		<li className='station'>
			<div className='station__buttons-container'>
				<button className='station__button-delete' onClick={handleDelete}></button>
				<button className='station__button-edit' onClick={handleEdit}></button>
			</div>
			<h2 className='station__title'>Name of station: {name}</h2>
			<ul className='station__text-container'>
				<p className='station__text'>Comment: {comment}</p>
				<p className='station__text'>Id: {id}</p>
				<p className='station__text'>Created at: {createdAt}</p>
				{updatedAt ? (
					<p className='station__text'>Updated at: {updatedAt}</p>
				) : (
					<p className='station__text'>Haven't updated yet</p>
				)}
			</ul>
		</li>
	);
}

export default Station;
