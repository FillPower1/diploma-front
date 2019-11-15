import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ProductDetails from '../components/product-details'

class ProductDetailsContainer extends Component {

    componentDidMount() {
        const productId = this.props.productId
        this.props.getSpecificProduct(productId)
    }

    render() {
        return (
            <ProductDetails {...this.props} />
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