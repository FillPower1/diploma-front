import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderFieldWithAnim from '../render-field-with-anim'
import { required, email } from '../validators'
import './login-form.scss'

const LoginForm = props => (
	<form onSubmit={props.handleSubmit}>
		<div className="input-field">
			<Field
				id="email"
				name="email"
				type="email"
				component={RenderFieldWithAnim}
				validate={[required, email]}
				label="Email"
			/>
		</div>
		<div className="input-field">
			<Field
				id="password"
				name="password"
				type="password"
				component={RenderFieldWithAnim}
				validate={[required]}
				label="Пароль"
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