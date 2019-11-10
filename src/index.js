import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <App />
            </Switch>
        </Router>
    </Provider >, document.getElementById('root')
)
