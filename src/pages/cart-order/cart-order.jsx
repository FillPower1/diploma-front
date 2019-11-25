import React from 'react'
import CartOrderContainer from '../../containers/cart-order'
import './cart-order.scss'

const CartOrder = () => {
	return (
		<div className="row">
			<div className="container">
				<div className="col s7 offset-s3">
					<div className="cart-order">
						<div className="cart-order__title">Заполните поля для заказа</div>
						<CartOrderContainer />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartOrder