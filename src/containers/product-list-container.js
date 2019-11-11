import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../actions'
import ProductList from '../components/product-list'

class ProductListContainer extends Component {

    componentDidMount() {
        this.props.getData()
    }

    addItemToCartHandler = (item) => {
        this.props.addItemToCart(item)
        this.props.calcCart()
    }

    search = (products, str) => {
        if (str.length === 0) {
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
        const { products, filter, searchField } = this.props
        const items = this.sortProducts(products, filter, searchField)

        return (
            <ProductList
                {...this.props}
                products={items}
                onAddToCart={this.addItemToCartHandler} />
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
    calcCart: actions.calcCart,
    setFilter: actions.setFilter,
    setSearhField: actions.setSearhField,
    addItemToCart: actions.addItemToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
