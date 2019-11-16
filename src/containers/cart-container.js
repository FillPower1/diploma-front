import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../data/actions'
import Cart from '../pages/cart'

const CartPageContainer = (props) => {

    const { items } = props

    const emptyCart = (
        <h4 className="center-align">Корзина пуста</h4>
    )

    return (
        <div className="cart">
            <div className="container">
                {!items.length ? emptyCart : <Cart {...props} />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        totalPrice: state.cart.totalPrice,
        orderStart: state.cart.orderStart
    }
}

const mapDispatchToProps = {
    onIncrease: actions.addItemToCart,
    onDecrease: actions.removeItemFromCart,
    removeItem: actions.removeAllFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer)