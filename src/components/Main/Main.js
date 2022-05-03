import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Api } from '../../utils/Api';
import './Main.css';
import * as Auth from '../../utils/Auth';
import StationsList from '../StationsList/StationsList';
import UsersList from '../UsersList/UsersList';

function Main() {
	const history = useHistory();

	const [stations, setStations] = useState([]);
	const [users, setUsers] = useState([]);

	const api = new Api({
		url: Auth.BASE_URL,
		headers: {
			'user-jwt': `${localStorage.getItem('jwt')}`,
			'content-type': 'application/json',
		},
	});

	useEffect(() => {
		api
			.getStations()
			.then((data) => {
				setStations(data);
			})
			.catch((err) => {
				console.log(`Возникла ошибка: ${err}`);
			});
	}, []);

	useEffect(() => {
		api
			.getUsers()
			.then((data) => {
				setUsers(data);
			})
			.catch((err) => {
				console.log(`Возникла ошибка: ${err}`);
			});
	}, []);

	function signOut() {
		localStorage.removeItem('jwt');
		history.push('/signin');
	}

	function handleDeleteStation(id) {
		api
			.deleteStation(id)
			.then(() => {
				const newStations = stations.filter((station) => station.id !== id);
				setStations(newStations);
			})
			.catch((err) => console.log(`Возникла ошибка: ${err}`));
	}

	function handleCreateStation(name, comment) {
		api
			.createStation(name, comment)
			.then((newStation) => {
				setStations([newStation, ...stations]);
			})
			.catch((err) => console.log(`Возникла ошибка: ${err}`));
	}

	function handleSearchStation(id) {
		api
			.getStationById(id)
			.then((station) => setStations([station]))
			.catch((err) => {
				setStations([]);
				console.log(`Возникла ошибка: ${err}`);
			});
	}

	function handleUpdateStation(id, name, content) {
		api
			.updateStation(id, name, content)
			.then(() => {
				api.getStations().then((data) => {
					setStations(data);
				});
			})
			.catch((err) => console.log(`Возникла ошибка: ${err}`));
	}

	function handleGetAllStations() {
		api
			.getStations()
			.then((data) => {
				setStations(data);
			})
			.catch((err) => console.log(`Возникла ошибка: ${err}`));
	}

	function handleDeleteUser(id) {
		api
			.deleteUser(id)
			.then(() => {
				const newUsers = users.filter((user) => user.id !== id);
				setUsers(newUsers);
			})
			.catch((err) => console.log(`Возникла ошибка: ${err}`));
	}

	function handleSearchUser(id) {
		api
			.getUserById(id)
			.then((user) => {
				setUsers([user]);
			})
			.catch((err) => {
				setUsers([]);
				console.log(`Возникла ошибка: ${err}`);
			});
	}

	function handleUpdateUser(id, name, comment, login, password) {
		api
			.updateUser(id, name, comment, login, password)
			.then(() => {
				api.getUsers().then((data) => {
					setUsers(data);
				});
			})
			.catch((err) => console.log(`Возникла ошибка: ${err}`));
	}

	function handleGetMe() {
		api.getMe().then((me) => setUsers([me]));
	}

	function handleGetAllUsers() {
		api
			.getUsers()
			.then((data) => {
				setUsers(data);
			})
			.catch((err) => console.log(`Возникла ошибка: ${err}`));
	}

	return (
		<section className='main'>
			<div className='main__title-container'>
				<h1 className='main__title'>Admin panel</h1>
				<button className='main__button-logout' onClick={signOut}>
					Log out
				</button>
			</div>
			<StationsList
				stations={stations}
				onDeleteStation={handleDeleteStation}
				onCreateStation={handleCreateStation}
				onSearchStation={handleSearchStation}
				onUpdateStation={handleUpdateStation}
				onGetAllStations={handleGetAllStations}
			/>
			<UsersList
				users={users}
				onDeleteUser={handleDeleteUser}
				onSearchUser={handleSearchUser}
				onUpdateUser={handleUpdateUser}
				onGetMe={handleGetMe}
				onGetAllUsers={handleGetAllUsers}
			/>
		</section>
	);
}

export default Main;
