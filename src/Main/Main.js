import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Api } from '../utils/Api';
import './Main.css';
import * as Auth from '../utils/Auth';
import StationsList from '../StationsList/StationsList';

function Main() {
	const history = useHistory();

	const [stations, setStations] = useState([]);

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
			.catch((err) => console.log(`Возникла ошибка: ${err}`));
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

	return (
		<section className='main'>
			<div className='main__title-container'>
				<h1 className='main__title'>Admin panel</h1>
				<button className='main__button-logout' onClick={signOut}>
					Log out
				</button>
			</div>
			<h2>Stations</h2>
			<StationsList
				stations={stations}
				onDeleteStation={handleDeleteStation}
				onCreateStation={handleCreateStation}
				onSearchStation={handleSearchStation}
				onUpdateStation={handleUpdateStation}
			/>
		</section>
	);
}

export default Main;
