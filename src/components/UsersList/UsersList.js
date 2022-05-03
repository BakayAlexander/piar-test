import React, { useState } from 'react';
import AdminForm from '../AdminForm/AdminForm';
import Popup from '../Popup/Popup';
import User from '../User/User';
import './UsersList.css';

function UsersList({ users, onDeleteUser, onSearchUser, onUpdateUser, onGetMe, onGetAllUsers }) {
	const [searchId, setSearchId] = useState('');
	const [nameUpdate, setNameUpdate] = useState('');
	const [commentUpdate, setCommentUpdate] = useState('');
	const [idUpdate, setIdUpdate] = useState('');
	const [loginUpdate, setLoginUpdate] = useState('');
	const [passwordUpdate, setPasswordUpdate] = useState('');
	const [isUpdateUserPopupOpen, setIsUpdateUserPopupOpen] = useState(false);

	function handleChangeSearchIdInput(e) {
		setSearchId(e.target.value);
	}

	function handleChangeNameUpdate(e) {
		setNameUpdate(e.target.value);
	}
	function handleChangeCommentUpdate(e) {
		setCommentUpdate(e.target.value);
	}

	function handleChangeLoginUpdate(e) {
		setLoginUpdate(e.target.value);
	}

	function handleChangePasswordUpdate(e) {
		setPasswordUpdate(e.target.value);
	}

	function handleSubmitSearchUser(e) {
		e.preventDefault();
		onSearchUser(searchId);
		window.location = '#user-list';
	}

	function handleSubmitUpdateUser(e) {
		e.preventDefault();
		onUpdateUser(idUpdate, nameUpdate, commentUpdate, loginUpdate, passwordUpdate);
		closePopup();
		window.location = '#user-list';
	}

	function handleClickEditButton(id, name, comment, login) {
		setIdUpdate(id);
		setNameUpdate(name);
		setCommentUpdate(comment);
		setLoginUpdate(login);
		setIsUpdateUserPopupOpen(true);
	}

	function handleSubmitGetMe(e) {
		e.preventDefault();
		onGetMe();
		window.location = '#user-list';
	}

	function handleSubmitGetAllUsers(e) {
		e.preventDefault();
		onGetAllUsers();
		window.location = '#user-list';
	}

	function closePopup() {
		setIsUpdateUserPopupOpen(false);
	}
	return (
		<div className='users-list'>
			<h2 className='users-list__title'>Users</h2>
			<div className='users-list__form-container'>
				<Popup isOpen={isUpdateUserPopupOpen} onClose={closePopup}>
					<AdminForm onSubmit={handleSubmitUpdateUser} buttonName='Update' title='Update user'>
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
						<label className='admin-form__label'>
							Login:
							<input
								className='admin-form__input'
								id='comment-input'
								type='text'
								autoComplete='none'
								placeholder='Please enter login'
								required
								value={loginUpdate ?? ''}
								onChange={handleChangeLoginUpdate}
							></input>
						</label>
						<label className='admin-form__label'>
							Password:
							<input
								className='admin-form__input'
								id='comment-input'
								type='text'
								autoComplete='none'
								placeholder='Please enter passwrod'
								required
								value={passwordUpdate ?? ''}
								onChange={handleChangePasswordUpdate}
							></input>
						</label>
					</AdminForm>
				</Popup>
				<AdminForm onSubmit={handleSubmitGetMe} buttonName='Search' title='Get my profile'></AdminForm>
				<AdminForm onSubmit={handleSubmitGetAllUsers} buttonName='Search' title='Get all profiles'></AdminForm>
				<AdminForm onSubmit={handleSubmitSearchUser} buttonName='Search' title='Search user by id'>
					<label className='admin-form__label'>
						User id:
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
			</div>
			<ul className='users-list__list' id='user-list'>
				{users.length !== 0 ? (
					users.map((user) => (
						<User
							key={user.id}
							id={user.id}
							name={user.name}
							comment={user.comment}
							createdAt={user.created_at}
							updatedAt={user.updated_at}
							login={user.login}
							onDelete={onDeleteUser}
							onClickEdit={handleClickEditButton}
						/>
					))
				) : (
					<h2 className='users-list__error'>Sorry there is no users with such params</h2>
				)}
			</ul>
		</div>
	);
}

export default UsersList;
