import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'
import CartModalItem from './cart-modal-item'
import ProductPrice from '../product-price'
import './cart-modal.scss'

const CartModal = (props) => {

    const { totalPrice, items, removeItem } = props

    return (
        <div className="popup">
            <div className="popup__content">
                <ul className="collection">
                    {
                        items.map(item => (
                            <CartModalItem
                                {...item}
                                key={item.id}
                                onRemoveItem={removeItem}
                            />
                        ))
                    }
                </ul>
                <p className="popup__total">
                    <ProductPrice price={totalPrice} />
                </p>
                <div className="popup__link">
                    <Link to="/cart" className="btn btn-small">Перейти в корзину</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.cart.items,
    totalPrice: state.cart.totalPrice,
})

const mapDispatchToProps = {
    removeItem: actions.removeAllFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)
