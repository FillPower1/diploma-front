import React from 'react'
import { connect } from 'react-redux'
import Tabs from '../../components/tabs'
import RegistrationForm from '../../components/form-components/registration-form'
import LoginForm from '../../components/form-components/login-form'
import * as actions from '../../data/actions'
import './authorization.scss'

const Authorization = props => {

	const onRegisterSubmit = (data) => {
		props.userRegisterFetch(data)
	}

	const onLoginSubmit = (data) => {
		props.userLoginFetch(data)
	}

	let activeTab = ''
	if (props.registered) {
		activeTab = 'Вход'
	} else activeTab = 'Регистрация'

	return (
		<div className="auth-block">
			<Tabs login={props.registered} activeTab={activeTab}>
				<div title="Регистрация">
					<div className="card">
						<div className="card-content">
							<span className="card-title">Зарегистрироваться</span>
							<RegistrationForm onSubmit={onRegisterSubmit} />
						</div>
					</div>
				</div>
				<div title="Вход">
					<div className="card">
						<div className="card-content">
							<span className="card-title">Вход</span>
							<LoginForm onSubmit={onLoginSubmit} />
						</div>
					</div>
				</div>
			</Tabs>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		currentUser: state.auth.currentUser,
		registered: state.auth.registered
	}
}

const mapDispatchToProps = {
	userRegisterFetch: actions.userRegisterFetch,
	userLoginFetch: actions.userLoginFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
