import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../render-field'
import { required, email, minLength6 } from '../validators'

const Registration = props => (
    <form onSubmit={props.handleSubmit}>
        <div className="input-field">
            <Field
                name="firstName"
                type="text"
                component={renderField}
                validate={[required]}
                label="Имя:"
            />
        </div>
        <div className="input-field">
            <Field
                name="lastName"
                type="text"
                component={renderField}
                validate={[required]}
                label="Фамилия:"
            />
        </div>
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
                validate={[required, minLength6]}
                label="Пароль:"
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