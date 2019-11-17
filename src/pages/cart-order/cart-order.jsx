import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import CartOrderForm from '../../components/cart-order-form'
import './cart-order.scss'

const CartOrder = props => {

    const { items } = props

    const submitHandler = (data) => {
        console.log(data)
    }

    return (
        <div className="row">
            <div className="container">
                <div className="col s7 offset-s3">
                    <div className="cart-order">
                        <div className="cart-order__title">Заполните данные для заказа</div>
                        {!items.length ? <Redirect to="/cart" /> : <CartOrderForm onSubmit={submitHandler} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.cart.items
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartOrder)
