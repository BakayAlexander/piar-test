import React, { useState } from 'react';
import AdminForm from '../AdminForm/AdminForm';
import Popup from '../Popup/Popup';
import Station from '../Station/Station';
import './StationsList.css';

function StationsList({
	stations,
	onDeleteStation,
	onCreateStation,
	onSearchStation,
	onUpdateStation,
	onGetAllStations,
}) {
	const [nameCreate, setNameCreate] = useState('');
	const [commentCreate, setCommentCreate] = useState('');
	const [searchId, setSearchId] = useState('');
	const [nameUpdate, setNameUpdate] = useState('');
	const [commentUpdate, setCommentUpdate] = useState('');

	const [isUpdateStationPopupOpen, setIsUpdateStationPopupOpen] = useState(false);

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

	function handleSubmitCreateStation(e) {
		e.preventDefault();
		onCreateStation(nameCreate, commentCreate);
		window.location = '#stations-list';
	}

	function handleSubmitSearchStation(e) {
		e.preventDefault();
		onSearchStation(searchId);
		window.location = '#stations-list';
	}

	function handleSubmitUpdateStation(e) {
		e.preventDefault();
		onUpdateStation(searchId, nameUpdate, commentUpdate);
		window.location = '#stations-list';
		closePopup();
	}

	function handleClickEditButton(id, name, comment) {
		setSearchId(id);
		setNameUpdate(name);
		setCommentUpdate(comment);
		setIsUpdateStationPopupOpen(true);
	}

	function handleGetAllStattions(e) {
		e.preventDefault();
		onGetAllStations();
		window.location = '#stations-list';
	}

	function closePopup() {
		setIsUpdateStationPopupOpen(false);
	}

	return (
		<div className='stations-list'>
			<h2 className='stations-list__title'>Stations</h2>
			<div className='stations-list__form-container'>
				<Popup isOpen={isUpdateStationPopupOpen} onClose={closePopup}>
					<AdminForm onSubmit={handleSubmitUpdateStation} buttonName='Update' title='Update station'>
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
				</Popup>
				<AdminForm onSubmit={handleGetAllStattions} buttonName='Search' title='Get all stations'></AdminForm>
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
			</div>
			<ul className='stations-list__list' id='stations-list'>
				{stations.length !== 0 ? (
					stations.map((station) => (
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
					))
				) : (
					<h2 className='stations-list__error'>Sorry there is no stations with such params</h2>
				)}
			</ul>
		</div>
	);
}

export default StationsList;
