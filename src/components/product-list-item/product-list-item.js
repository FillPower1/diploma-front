import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './product-list-item.scss'

const ProductListItem = (product) => {
    const { title, imageSrc, price, onAddToCart, onSelectedProductHandler } = product

    return (
        <div className="product">
            <div className="product__img">
                <img src={`http://localhost:5000/${imageSrc}`} alt="product-img" />
            </div>
            <div className="product__list">
                <h3>{title}</h3>
                <div className="stars"></div>
                <span className="price">
                    {price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                </span>
                <button
                    onClick={() => onSelectedProductHandler(product.id)}
                    className="cart-button waves-effect light-blue darken-3 btn-small">
                    Подробнее
                </button>
                <button
                    onClick={() => onAddToCart(product)}
                    className="cart-button waves-effect waves-light btn-small">
                    Добавить в корзину
                </button>

                {/* Здесь настройки для библиотеки react-toastify, всплывающие уведомления при клике */}
                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover={false}
                />
            </div>
        </div>
    )
}

export default ProductListItem