import React from 'react'
import ProductDetailsContainer from '../../containers/product-details'

const ProductDetails = ({ productId }) => {
	return (
		<div className="product-wrap">
			<div className="container">
				<div className="row">
					<div className="col s9 offset-s2">
						<ProductDetailsContainer productId={productId} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails