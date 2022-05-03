import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import * as Auth from '../../utils/Auth';

function App() {
	const history = useHistory();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function handleRegister(name, comment, login, password) {
		Auth.register(name, comment, login, password)
			.then((res) => {
				if (res.statusCode !== 422) {
					history.push('/signin');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleLogin(loggin, password) {
		setIsLoggedIn(true);
		Auth.authorize(loggin, password)
			.then((res) => {
				if (res.user_jwt) {
					setIsLoggedIn(true);
					history.push('/');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className='page'>
			<Switch>
				<ProtectedRoute component={Main} exact path='/' isLoggedIn={isLoggedIn} />
				<Route exact path='/signin'>
					<Login onSubmit={handleLogin} />
				</Route>
				<Route exact path='/signup'>
					<Register onSubmit={handleRegister} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
