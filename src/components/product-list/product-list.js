import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Spinner from '../spinner'
import Filter from '../filter'
import ProductListItem from '../product-list-item'
import { setFilter, setSearhField } from '../../actions/filter'
import { addItemToCart } from '../../actions/cart'
import { getData } from '../../actions/products'
import ErrorIndicator from '../error-indicator'

class ProductList extends Component {

    componentDidMount() {
        this.props.getData()
    }

    renderCards = (products) => {
        return products.map(item => (
            <ProductListItem
                {...item}
                key={item.id}
                onAddToCart={this.addItemToCartHandler}
            />
        ))
    }

    addItemToCartHandler = (item) => {
        this.props.addItemToCart(item)
    }

    render() {
        const { isFetching, products, setSearhField,
                setFilter, filter, searchField, error } = this.props

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <Fragment>
                <Filter
                    setSearchField={setSearhField}
                    searchFieldValue={searchField}
                    filterBy={filter}
                    setFilter={setFilter}
                />

                <div className="products">
                    {isFetching ? <Spinner /> : this.renderCards(products)}
                </div>
            </Fragment>
        )
    }
}

const search = (products, str) => {
    if (str.length === 0) {
        return products
    }

    return products.filter(product => {
        return product.title.toLowerCase().indexOf(str.toLowerCase()) > -1
    })
}

const sortProducts = (products, filter, str) => {
    products = search(products, str)

    switch (filter) {
        case 'expensive':
            return _.orderBy(products, 'price', 'desc')
        case 'cheap':
            return _.orderBy(products, 'price', 'asc')
        default:
            return products
    }
}

const mapStateToProps = state => {
    return {
        products: sortProducts(state.items.products, state.filter.filterBy, state.filter.searchField),
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
)(ProductList)
