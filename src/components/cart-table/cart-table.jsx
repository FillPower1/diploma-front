import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../cart-item'
import ProductPrice from '../common/product-price'
import './cart.scss'

const CartTable = (props) => {

	const { items } = props

	return (
		<>
			<table className="bordered">
				<thead>
					<tr>
						<th>#</th>
						<th>Наименование</th>
						<th>Количество</th>
						<th>Цена</th>
						<th>Удалить</th>
					</tr>
				</thead>
				<tbody>
					{
						items.map((item, i) => (
							<CartItem key={item.id} item={item} index={i} {...props} />
						))
					}
				</tbody>
			</table>
			<div className="cart-info right-align">
				<h5>
					Итого: <ProductPrice price={props.totalPrice} />
				</h5>
				<Link to="/cart/order" className="btn btn-small">
					Оформить заказ
				</Link>
			</div>
		</>
	)
}


export default CartTable