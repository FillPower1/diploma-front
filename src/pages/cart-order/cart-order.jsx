import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import * as actions from '../../data/actions'
import CartOrderForm from '../../components/cart-order-form'
import api from '../../api'
import './cart-order.scss'

const CartOrder = props => {

	const { items, setEmptyCart, setUserInfo, setEmptyUserInfo } = props

	const submitHandler = (data) => {
		setEmptyUserInfo() // очищаю инфу про предыдущего юзера

		api.setOrder(data, items).then(res => setUserInfo(res))

		setEmptyCart() // обнуляю корзину
		props.history.push('/cart/order-complete') // переход на страницу завершения заказа
	}

	return (
		<div className="row">
			<div className="container">
				<div className="col s7 offset-s3">
					<div className="cart-order">
						<div className="cart-order__title">Заполните поля для заказа</div>
						{!items.length ? <Redirect to="/" /> : <CartOrderForm onSubmit={submitHandler} />}
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
	setEmptyCart: actions.setEmptyCart,
	setUserInfo: actions.setUserInfo,
	setEmptyUserInfo: actions.setEmptyUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartOrder))
