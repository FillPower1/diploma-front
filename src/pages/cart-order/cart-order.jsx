import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import * as actions from '../../data/actions'
import CartOrderForm from '../../components/cart-order-form'
import './cart-order.scss'

const CartOrder = props => {

    const { items, setEmptyCart } = props

    const submitHandler = (data) => {
        console.log(data)
        
        setEmptyCart() // обнуляю корзину
        props.history.push('/cart/order-complete')
    }

    return (
        <div className="row">
            <div className="container">
                <div className="col s7 offset-s3">
                    <div className="cart-order">
                        <div className="cart-order__title">Заполните данные для заказа</div>
                        {!items.length ? <Redirect to="/" /> : <CartOrderForm onSubmit={submitHandler} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.cart.items,
    isFinishOrder: state.cart.finishOrder
})

const mapDispatchToProps = {
    setEmptyCart: actions.setEmptyCart
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartOrder))
