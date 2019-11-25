import React from 'react'
import ProductPrice from '../common/product-price'

const CartItem = props => {

	const { index, item, removeItem, onIncrease, onDecrease } = props

	return (
		<tr>
			<th>{index + 1}</th>
			<td>{item.title}</td>
			<td>
				<button className="btn btn-small" onClick={() => onDecrease(item)}>
					<i className="fa fa-minus" aria-hidden="true"></i>
				</button>
				<span className="cart-counter">{item.count}</span>
				<button className="btn btn-small" onClick={() => onIncrease(item)}>
					<i className="fa fa-plus" aria-hidden="true"></i>
				</button>
			</td>
			<td>
				<span className="cart-price">
					<ProductPrice price={item.price} />
				</span>
			</td>
			<td>
				<button onClick={() => removeItem(item)} className="btn btn-small">
					<i className="fa fa-trash" aria-hidden="true"></i>
				</button>
			</td>
		</tr>
	)
}

export default CartItem
