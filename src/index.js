import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './data/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.css'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<App />
			</Switch>
		</Router>
	</Provider >, document.getElementById('root')
)
