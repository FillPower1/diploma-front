import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getData } from '../../actions/products'
import { addItemToCart } from '../../actions/cart'
import { setFilter, setSearhField } from '../../actions/filter'
import ProductList from '../product-list'

class ProductListContainer extends Component {

    componentDidMount() {
        this.props.getData()
    }

    addItemToCartHandler = (item) => {
        this.props.addItemToCart(item)
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
        products: state.items.products,
        isFetching: state.items.isFetching,
        filter: state.filter.filterBy,
        searchField: state.filter.searchField,
        error: state.items.error
    }
}

export default connect(
    mapStateToProps,
    {
        setFilter,
        setSearhField,
        addItemToCart,
        getData
    }
)(ProductListContainer)
