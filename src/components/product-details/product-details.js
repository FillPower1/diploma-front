import React from 'react'
import Tabs from '../tabs'
import ProductPrice from '../common/product-price'
import AddToCartBtn from '../common/add-to-cart-btn'
import ProductImage from '../common/product-image'
import Characteristics from './characteristics'
import './product-details.scss'

const ProductDetails = (props) => {

	const { product, addItemToCart } = props

	const { imageSrc, description, price,
		title, video, id, characteristics } = product

	return (
		<div className="product-info">
			<h2 className="product-title">{title}</h2>
			<div className="product-image">
				<ProductImage img={imageSrc} />
			</div>
			<div className="product-descr">
				<div className="product-price">
					<ProductPrice price={price} />
				</div>
				<div className="product-add-to-cart">
					<AddToCartBtn onAddToCart={addItemToCart} product={product} />
				</div>
				<Tabs>
					<div id="Описание">
						<p>{description}</p>
					</div>
					<div id="Характеристики">
						<Characteristics characteristics={characteristics} />
					</div>
					<div id="Обзор">
						<iframe
							src={video}
							title={id}
							frameBorder="0"
							allowFullScreen
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
				</Tabs>
			</div>
		</div>
	)
}

export default ProductDetails
