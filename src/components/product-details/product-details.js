import React from 'react'
import Spinner from '../spinner'
import Tabs from '../tabs'
import Characteristics from './characteristics'
import Description from './description'
import View from './view'
import ErrorIndicator from '../error-indicator'
import ProductPrice from '../product-price'
import AddToCartBtn from '../add-to-cart-btn'
import ProductImage from '../product-image'
import './product-details.scss'

const ProductDetails = (props) => {

    const { isFetching, product, addItemToCart, error } = props

    if (error) {
        return <ErrorIndicator />
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

export default ProductDetails
