import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../data/actions'
import CartTable from '../components/cart-table'

const CartPageContainer = (props) => {

	const { items } = props

	const emptyCart = (
		<h4 className="center-align">Корзина пуста</h4>
	)

	return !items.length ? emptyCart : <CartTable {...props} />
}

const mapStateToProps = (state) => {
	return {
		items: state.cart.items,
		totalPrice: state.cart.totalPrice
	}
}

const mapDispatchToProps = {
	onIncrease: actions.addItemToCart,
	onDecrease: actions.removeItemFromCart,
	removeItem: actions.removeAllFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer)