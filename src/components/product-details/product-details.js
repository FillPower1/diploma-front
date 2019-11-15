import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../spinner'
import Tabs from '../tabs'
import Characteristics from './characteristics'
import Description from './description'
import View from './view'
import ErrorIndicator from '../error-indicator'
import * as actions from '../../actions'
import './product-details.scss'

const ProductDetails = (props) => {

    const { isFetching, product, addItemToCart, error } = props
    
    if (error) {
        return <ErrorIndicator/>
    }

    let content
    if (isFetching) {
        content = <Spinner />
    } else {
        const { imageSrc, description,
            price, title, video, id,
            characteristics } = product

        content = (
            <div className="product-info">
                <h2 className="product-title">{title}</h2>
                <div className="product-image">
                    <img src={`http://localhost:5000/${imageSrc}`} alt="product-img" />
                </div>
                <div className="product-descr">
                    <div className="product-price">
                        Цена: {price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                    </div>
                    <div className="product-add-to-cart">
                        <button className="btn" onClick={() => addItemToCart(product)}>Добавить в корзину</button>
                    </div>
                    <Tabs>
                        <div label="Описание">
                            <Description description={description} />
                        </div>
                        <div label="Характеристики">
                            <Characteristics characteristics={characteristics} />
                        </div>
                        <div label="Обзор">
                            <View id={id} video={video} />
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }

    return (
        <div className="product-wrap">
            <div className="container">
                <div className="row">
                    <div className="col s9 offset-s2">
                        {
                            content
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

class ProductDetailsContainer extends React.Component {

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
