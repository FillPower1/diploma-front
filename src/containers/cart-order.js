import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import * as actions from '../data/actions'
import CartOrderForm from '../components/form-components/cart-order-form'
import api from '../api'

const CartOrder = props => {

	const { items, setEmptyCart, setUserInfo, setEmptyUserInfo } = props

	const submitHandler = (data) => {
		setEmptyUserInfo() // очищаю инфу про предыдущего юзера

		api.setOrder(data, items).then(res => setUserInfo(res))

		setEmptyCart() // обнуляю корзину
		props.history.push('/cart/order-complete') // переход на страницу завершения заказа
	}

	return !items.length ? <Redirect to="/" /> : <CartOrderForm onSubmit={submitHandler} />
}

const mapStateToProps = state => ({
	items: state.cart.items
})

const mapDispatchToProps = {
	setEmptyCart: actions.setEmptyCart,
	setUserInfo: actions.setUserInfo,
	setEmptyUserInfo: actions.setEmptyUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartOrder))
