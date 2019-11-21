import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import PropTypes from 'prop-types'
import * as actions from '../data/actions'
import ProductList from '../components/product-list'

class ProductListContainer extends Component {

	static propTypes = {
		products: PropTypes.array.isRequired
	}

	componentDidMount() {
		this.props.getData()
	}

	selectedProductHandler = (id) => {
		this.props.history.push(`/products/${id}`)
		this.props.toggleFetching()
	}

	search = (products, str) => {
		if (!str.length) {
			return products
		}

		return products.filter(product => {
			return product.title.toLowerCase().indexOf(str.toLowerCase()) > -1
		})
	}

	sortProducts = (products, filter, str) => {
		products = this.search(products, str)

		switch (filter) {
		case 'expensive':
			return _.orderBy(products, 'price', 'desc')
		case 'cheap':
			return _.orderBy(products, 'price', 'asc')
		default:
			return products
		}
	}

	render() {
		const { products, filter, searchField, addItemToCart } = this.props
		const items = this.sortProducts(products, filter, searchField)

		return (
			<ProductList
				{...this.props}
				products={items}
				selectedProductHandler={this.selectedProductHandler}
				onAddToCart={addItemToCart} />
		)
	}
}

const mapStateToProps = state => {
	return {
		error: state.items.error,
		filter: state.filter.filterBy,
		products: state.items.products,
		isFetching: state.items.isFetching,
		searchField: state.filter.searchField
	}
}

const mapDispatchToProps = {
	getData: actions.getData,
	setFilter: actions.setFilter,
	addItemToCart: actions.addItemToCart,
	toggleFetching: actions.toggleFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductListContainer))
