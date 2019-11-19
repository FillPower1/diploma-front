import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../data/actions'
import ErrorIndicator from '../components/common/error-indicator'
import ProductDetails from '../components/product-details'
import Spinner from '../components/common/spinner'

class ProductDetailsContainer extends Component {

	componentDidMount() {
		const { productId } = this.props
		this.props.getSpecificProduct(productId)
	}

	render() {
		const { error, isFetching } = this.props

		if (error) {
			return <ErrorIndicator />
		}

		return (
			<div className="product-wrap">
				<div className="container">
					<div className="row">
						<div className="col s9 offset-s2">
							{isFetching ? <Spinner /> : <ProductDetails {...this.props} />}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		product: state.items.specificProduct,
		isFetching: state.items.isFetching,
		error: state.items.error
	}
}

const mapDispatchToProps = {
	getSpecificProduct: actions.getSpecificProduct,
	toggleFetching: actions.toggleFetching,
	addItemToCart: actions.addItemToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer)