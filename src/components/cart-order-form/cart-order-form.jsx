import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Это обязательное поле')
const phoneNumber = value => (
    value && /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(value)
        ? undefined
        : 'Неверный номер телефона'
)
const email = value => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Неверный адрес электронной почты'
        : undefined
)
const minLength = min => value =>
    value && value.length < min ? `Должно быть минимум ${min} символов или больше` : undefined
const minLength2 = minLength(5)

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="field">
        <input {...input} placeholder={label} type={type} className={`field__item ${touched && error ? ' error' : ''}`} />
        {touched &&
            ((error && <span className="field__error">{error}</span>))}
    </div>
)


const cartOrderForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="input-field col s6">
                    <Field
                        name="username"
                        type="text"
                        component={renderField}
                        validate={[required]}
                        label="Имя"
                    />
                </div>
                <div className="input-field col s6">
                    <Field
                        name="surname"
                        type="text"
                        component={renderField}
                        validate={[required]}
                        label="Фамилия"
                    />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <Field
                        name="phone"
                        type="text"
                        component={renderField}
                        validate={[required, phoneNumber]}
                        label="Телефон"
                    />
                </div>
                <div className="input-field col s6">
                    <Field
                        name="email"
                        type="text"
                        component={renderField}
                        validate={[required, email]}
                        label="Email"
                    />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <Field
                        name="address"
                        type="text"
                        component={renderField}
                        validate={[required, minLength2]}
                        label="Адрес"
                    />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <Field
                        name="notes"
                        type="text"
                        component={"textarea"}
                        label="Комментарии к заказу"
                        placeholder={"Комментарии к заказу"}
                        className="materialize-textarea"
                    />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <div>
                        <label>
                            <Field name="register" type="checkbox" component={"input"} />
                            <span>Зарегистрировать аккаунт?</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <small>Нажимая на кнопку «Заказать» вы соглашаетесь на обработку ваших данных.</small>
                </div>
            </div>
            <button className="align-center btn btn-small">Заказать</button>
        </form >
    )
}

export default reduxForm({
    form: 'cartform'
})(cartOrderForm)