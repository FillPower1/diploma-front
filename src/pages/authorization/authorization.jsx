import React from 'react'
import { connect } from 'react-redux'
import Tabs from '../../components/tabs'
import RegistrationForm from '../../components/registration-form'
import LoginForm from '../../components/login-form'
import * as actions from '../../data/actions'
import './authorization.scss'

const Authorization = props => {

	const onSubmit = (data) => {
		props.userRegisterFetch(data)
		// console.log(props.currentUser)
	}



	 console.log(props)

	return (
		<div className="auth-block">
			<Tabs login={props.registered}>
				<div id="Регистрация">
					<div className="card">
						<div className="card-content">
							<span className="card-title">Зарегистрироваться</span>
							<RegistrationForm onSubmit={onSubmit} />
						</div>
					</div>
				</div>
				<div id="Вход" selected={props.registered}>
					<div className="card">
						<div className="card-content">
							<span className="card-title">Вход</span>
							<LoginForm onSubmit={onSubmit} />
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
	userRegisterFetch: actions.userRegisterFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
