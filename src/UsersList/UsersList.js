import React, { useState } from 'react';
import AdminForm from '../AdminForm/AdminForm';
import Station from '../Station/Station';
import './UsersList.css';

function UsersList({ stations, onDeleteStation, onCreateStation, onSearchStation, onUpdateStation }) {
	const [nameCreate, setNameCreate] = useState('');
	const [commentCreate, setCommentCreate] = useState('');
	const [searchId, setSearchId] = useState('');
	const [nameUpdate, setNameUpdate] = useState('');
	const [commentUpdate, setCommentUpdate] = useState('');
	const [idUpdate, setIdUpdate] = useState('');

	function handleChangeNameCreate(e) {
		setNameCreate(e.target.value);
	}
	function handleChangeCommentCreate(e) {
		setCommentCreate(e.target.value);
	}

	function handleChangeSearchIdInput(e) {
		setSearchId(e.target.value);
	}

	function handleChangeNameUpdate(e) {
		setNameUpdate(e.target.value);
	}
	function handleChangeCommentUpdate(e) {
		setCommentUpdate(e.target.value);
	}

	function handleChangeIdInputUpdate(e) {
		setIdUpdate(e.target.value);
	}

	function handleSubmitCreateStation(e) {
		e.preventDefault();
		onCreateStation(nameCreate, commentCreate);
		document.getElementById('stations-list').focus();
	}

	function handleSubmitSearchStation(e) {
		e.preventDefault();
		onSearchStation(searchId);
	}

	function handleSubmitUpdateStation(e) {
		e.preventDefault();
		onUpdateStation(idUpdate, nameUpdate, commentUpdate);
	}

	function handleClickEditButton(id) {
		setIdUpdate(id);
		document.getElementById('id-update-input').focus();
	}

	return (
		<div className='stations-list'>
			<h2 className='stations-list__title'>Stations</h2>
			<div className='stations-list__form-container'>
				<AdminForm onSubmit={handleSubmitCreateStation} buttonName='Add' title='Add new station'>
					<label className='admin-form__label'>
						Name:
						<input
							className='admin-form__input'
							id='name-input'
							type='text'
							autoComplete='none'
							placeholder='Please enter name'
							required
							value={nameCreate ?? ''}
							onChange={handleChangeNameCreate}
						></input>
					</label>
					<label className='admin-form__label'>
						Comment:
						<input
							className='admin-form__input'
							id='comment-input'
							type='text'
							autoComplete='none'
							placeholder='Please enter comment'
							required
							value={commentCreate ?? ''}
							onChange={handleChangeCommentCreate}
						></input>
					</label>
				</AdminForm>
				<AdminForm onSubmit={handleSubmitSearchStation} buttonName='Search' title='Search station by id'>
					<label className='admin-form__label'>
						Station id:
						<input
							className='admin-form__input'
							id='id-input'
							type='text'
							autoComplete='none'
							placeholder='Plese enter id'
							required
							value={searchId ?? ''}
							onChange={handleChangeSearchIdInput}
						></input>
					</label>
				</AdminForm>
				<AdminForm onSubmit={handleSubmitUpdateStation} buttonName='Update' title='Update station'>
					<label className='admin-form__label'>
						Station id:
						<input
							className='admin-form__input'
							id='id-update-input'
							type='text'
							autoComplete='none'
							placeholder='Plese enter id'
							required
							value={idUpdate ?? ''}
							onChange={handleChangeIdInputUpdate}
						></input>
					</label>
					<label className='admin-form__label'>
						Name:
						<input
							className='admin-form__input'
							id='name-input'
							type='text'
							autoComplete='none'
							placeholder='Plese enter name'
							required
							value={nameUpdate ?? ''}
							onChange={handleChangeNameUpdate}
						></input>
					</label>
					<label className='admin-form__label'>
						Comment:
						<input
							className='admin-form__input'
							id='comment-input'
							type='text'
							autoComplete='none'
							placeholder='Please enter comment'
							required
							value={commentUpdate ?? ''}
							onChange={handleChangeCommentUpdate}
						></input>
					</label>
				</AdminForm>
			</div>
			<ul className='stations-list__list'>
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
						onClickEditStation={handleClickEditButton}
					/>
				))}
			</ul>
		</div>
	);
}

export default UsersList;
