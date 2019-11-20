import React from 'react'
import ProductImage from '../../common/product-image'

const CartModalItem = (item) => {

	const { onRemoveItem, id, imageSrc, title, count } = item

	return (
		<li className="collection-item" key={id}>
			<ProductImage img={imageSrc} />
			<div className="popup__text">{title} ({count})</div>
			<span className="popup__btn" onClick={() => onRemoveItem(item)}>&times;</span>
		</li>
	)
}

export default CartModalItem
