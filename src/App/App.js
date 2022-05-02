import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Register from '../Register/Register';

function App() {
	return (
		<div className='page'>
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>
				<Route exact path='/signin'>
					<Login />
				</Route>
				<Route exact path='/signup'>
					<Register />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
