import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import './cart-order.scss'

const CartOrder = props => {

    const { items } = props

    const submitHandler = (data) => {
        console.log(data)
    }

    return (
        <div className="row">
            <div className="container">
                <div className="col s6 offset-s3">
                    <div className="cart-order">
                        {!items.length ? <Redirect to="/cart" /> : <CartFormRedux onSubmit={submitHandler} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

const cartForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="input-field col s6">
                    <Field
                        name="username"
                        type="text"
                        component={"input"}
                        label="Имя"
                        placeholder="Имя"
                    />
                </div>
                <div className="input-field col s6">
                    <Field
                        name="surname"
                        type="text"
                        component={"input"}
                        label="Фамилия"
                        placeholder="Фамилия"
                    />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <Field
                        name="phone"
                        type="text"
                        component={"input"}
                        label="Телефон"
                        placeholder="Телефон"
                    />
                </div>
                <div className="input-field col s6">
                    <Field
                        name="email"
                        type="text"
                        component={"input"}
                        label="Email"
                        placeholder="Email"
                    />
                </div>
            </div>
            <button className="align-center btn btn-small">Заказать</button>
        </form>
    )
}

const CartFormRedux = reduxForm({
    form: 'cartform'
})(cartForm)

const mapStateToProps = state => ({
    items: state.cart.items
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartOrder)
