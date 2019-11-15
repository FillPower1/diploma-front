import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'
import './cart-modal.scss'

const CartModal = (props) => {
    const { totalPrice, items, removeItem } = props

    return (
        <div className={`popup`}>
            <div className="popup__content">
                <ul className="collection">
                    {
                        items.map(item => {
                            return (
                                <li className="collection-item" key={item.id}>
                                    <img src={`http://localhost:5000/${item.imageSrc}`} alt="product" />
                                    <div className="popup__text">{item.title} ({item.count})</div>
                                    <span onClick={() => removeItem(item)} className="popup__btn">&times;</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className="popup__total">
                    Итого: {totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                </p>
                <div className="popup__route">
                    <Link to="/cart" className="btn btn-small waves-effect waves-ligh">Перейти в корзину</Link>
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
