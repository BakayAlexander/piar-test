import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';

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
			</Switch>
		</div>
	);
}

export default App;
