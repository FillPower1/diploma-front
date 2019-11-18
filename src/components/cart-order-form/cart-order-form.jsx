import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../render-field'
import {
    required,
    phoneNumber,
    email,
    minLength5
} from '../validators'


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
                        validate={[required, minLength5]}
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