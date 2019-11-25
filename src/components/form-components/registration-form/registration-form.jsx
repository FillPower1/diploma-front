import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderFieldWithAnim from '../render-field-with-anim'
import { required, email, minLength6 } from '../validators'

const Registration = props => (
	<form onSubmit={props.handleSubmit}>
		<div className="input-field">
			<Field
				id="firstName"
				name="firstName"
				type="text"
				component={RenderFieldWithAnim}
				validate={[required]}
				label="Имя"
			/>
		</div>
		<div className="input-field">
			<Field
				id="lastName"
				name="lastName"
				type="text"
				component={RenderFieldWithAnim}
				validate={[required]}
				label="Фамилия"
			/>
		</div>
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
				validate={[required, minLength6]}
				label="Пароль"
			/>
		</div>
		<div className="card-action">
			<button className="btn waves-effect">Зарегистрироваться</button>
		</div>
	</form >
)

export default reduxForm({
	form: 'registrationForm'
})(Registration)