export const BASE_URL = 'https://piar.meew.me';

const prepareDate = (res) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(res.status);
};

export const register = (name, comment, login, password) => {
	return fetch(`${BASE_URL}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, comment, login, password }),
	}).then(prepareDate);
};

export const authorize = (login, password) => {
	return fetch(`${BASE_URL}/users/auth`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ login, password }),
	})
		.then(prepareDate)
		.then((res) => {
			if (res.user_jwt) {
				localStorage.setItem('jwt', res.user_jwt);
				return res;
			}
		});
};

// export const checkToken = (token) => {
// 	return fetch(`${BASE_URL}/users/auth`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Authorization: `Bearer ${token}`,
// 		},
// 	}).then(prepareDate);
// };
