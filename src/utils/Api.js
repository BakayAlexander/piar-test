export class Api {
	constructor(config) {
		this._url = config.url;
		this._headers = config.headers;
		this._body = config.body;
	}

	_prepareDate = (res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(res.status);
	};

	getStations() {
		return fetch(`${this._url}/stations`, {
			headers: this._headers,
		}).then((res) => {
			return this._prepareDate(res);
		});
	}

	createStation(name, comment) {
		return fetch(`${this._url}/stations`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				comment: comment,
			}),
		}).then((res) => {
			return this._prepareDate(res);
		});
	}

	getStationById(id) {
		return fetch(`${this._url}/stations/${id}`, {
			headers: this._headers,
		}).then((res) => {
			return this._prepareDate(res);
		});
	}

	deleteStation(id) {
		return fetch(`${this._url}/stations/${id}`, {
			method: 'DELETE',
			headers: this._headers,
		}).then((res) => {
			return this._prepareDate(res);
		});
	}

	updateStation(id, name, comment) {
		return fetch(`${this._url}/stations/${id}`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				comment: comment,
			}),
		}).then((res) => {
			return this._prepareDate(res);
		});
	}

	getUsers() {
		return fetch(`${this._url}/users`, {
			headers: this._headers,
		}).then((res) => {
			return this._prepareDate(res);
		});
	}

	createUser(name, comment, login, password) {
		return fetch(`${this._url}/users`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				comment: comment,
				login: login,
				password: password,
			}),
		}).then((res) => {
			return this._prepareDate(res);
		});
	}

	getMe() {
		return fetch(`${this._url}/users/me`, {
			headers: this._headers,
		}).then((res) => {
			return this._prepareDate(res);
		});
	}

	getUserById(id) {
		return fetch(`${this._url}/users/${id}`, {
			headers: this._headers,
		}).then((res) => {
			return this._prepareDate(res);
		});
	}

	deleteUser(id) {
		return fetch(`${this._url}/users/${id}`, {
			method: 'DELETE',
			headers: this._headers,
		}).then((res) => {
			return this._prepareDate(res);
		});
	}

	updateUser(id, name, comment, login, password) {
		return fetch(`${this._url}/users/${id}`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				comment: comment,
				login: login,
				password: password,
			}),
		}).then((res) => {
			return this._prepareDate(res);
		});
	}
}
