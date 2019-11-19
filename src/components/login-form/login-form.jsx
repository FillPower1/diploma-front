import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../render-field'
import { required, email } from '../validators'

const LoginForm = props => (
	<form onSubmit={props.handleSubmit}>
		<div className="input-field">
			<Field
				name="email"
				type="email"
				component={renderField}
				validate={[required, email]}
				label="Email:"
			/>
		</div>
		<div className="input-field">
			<Field
				name="password"
				type="password"
				component={renderField}
				validate={[required]}
				label="Пароль:"
			/>
		</div>
		<div className="card-action">
			<button className="btn waves-effect">Войти</button>
		</div>
	</form>
)

export default reduxForm({
	form: 'loginForm'
})(LoginForm)