import React from 'react'
import AddToCartBtn from '../../common/add-to-cart-btn'
import ProductPrice from '../../common/product-price'
import ProductImage from '../../common/product-image'
import './product-list-item.scss'

const ProductListItem = (product) => {
    const { title, imageSrc, price, onAddToCart,
            onSelectedProductHandler } = product

    return (
        <div className="product">
            <div className="product__img">
                <ProductImage img={imageSrc} />
            </div>
            <div className="product__list">
                <h3>{title}</h3>
                <div className="stars"></div>
                <span className="price">
                    <ProductPrice price={price} />
                </span>
                <button
                    onClick={() => onSelectedProductHandler(product.id)}
                    className="cart-button waves-effect light-blue darken-3 btn-small">
                    Подробнее
                </button>
                <div className="cart-button">
                    <AddToCartBtn onAddToCart={onAddToCart} product={product} />
                </div>
            </div>
        </div>
    )
}

export default ProductListItem