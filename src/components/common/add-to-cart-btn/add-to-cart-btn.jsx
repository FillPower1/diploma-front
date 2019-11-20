import React from 'react'
import './add-to-cart-btn.scss'

const AddToCartBtn = ({ onAddToCart, product }) => {
	return (
		<button
			onClick={() => onAddToCart(product)}
			className="waves-effect waves-light btn-small">
            Добавить в корзину
		</button>
	)
}

export default AddToCartBtn
