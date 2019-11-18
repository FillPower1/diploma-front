import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../render-field'
import { required, email, minLength6 } from '../validators'

const Registration = props => (
    <form onSubmit={props.handleSubmit}>
        <div class="input-field">
            <Field
                name="username"
                type="text"
                component={renderField}
                validate={[required]}
                label="Имя:"
            />
        </div>
        <div className="input-field">
            <Field
                name="surname"
                type="text"
                component={renderField}
                validate={[required]}
                label="Фамилия:"
            />
        </div>
        <div class="input-field">
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
                validate={[required, minLength6]}
                label="Пароль:"
            />
        </div>
        <div class="card-action">
            <button class="btn waves-effect">Зарегистрироваться</button>
        </div>
    </form >
)

export default reduxForm({
    form: 'registrationForm'
})(Registration)