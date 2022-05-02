import React, { useState } from 'react';
import Station from '../Station/Station';
import './StationsList.css';

function StationsList({ stations, onDeleteStation, onCreateStation, onSearchStation }) {
	const [name, setName] = useState('');
	const [comment, setComment] = useState('');
	const [searchId, setSearchId] = useState('');

	function handleChangeName(e) {
		setName(e.target.value);
	}
	function handleChangeComment(e) {
		setComment(e.target.value);
	}

	function handleChangeSearchIdInput(e) {
		setSearchId(e.target.value);
	}

	function handleSubmitCreateStation(e) {
		e.preventDefault();
		onCreateStation(name, comment);
	}

	function handleSubmitSearchStation(e) {
		e.preventDefault();
		onSearchStation(searchId);
	}

	return (
		<>
			<form onSubmit={handleSubmitCreateStation}>
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
				<button className='auth-form__submit-button' type='submit'>
					Add station
				</button>
			</form>
			<form onSubmit={handleSubmitSearchStation}>
				<label className='auth-form__label'>
					Search station by id
					<input
						className='auth-form__input'
						id='id-input'
						type='text'
						autoComplete='none'
						placeholder='Plese enter id'
						value={searchId ?? ''}
						onChange={handleChangeSearchIdInput}
					></input>
				</label>
				<button className='auth-form__submit-button' type='submit'>
					Search
				</button>
			</form>
			<ul className='stations-list'>
				{stations.map((station) => (
					<Station
						key={station.id}
						id={station.id}
						name={station.name}
						comment={station.comment}
						createdAt={station.created_at}
						updatedAt={station.updated_at}
						login={station.login}
						onDeleteStation={onDeleteStation}
					/>
				))}
			</ul>
		</>
	);
}

export default StationsList;
