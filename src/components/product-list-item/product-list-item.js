import React from 'react'
import './product-list-item.scss'

const ProductListItem = (product) => {
    const { title, imageSrc, price, onAddToCart } = product

    return (
        <div className="product">
            <div className="product__img">
                <img src={`http://localhost:3000/${imageSrc}`} alt="product-img" />
            </div>
            <div className="product__list">
                <h3>{title}</h3>
                <div className="stars"></div>
                <span className="price">{price} руб.</span>
                <div className="add-to-cart">
                    <button
                        className="cart-button"
                        onClick={() => onAddToCart(product)}>
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductListItem