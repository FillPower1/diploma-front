import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'
import './cart-modal.scss'

const CartModal = (props) => {
    const { isOpenModal, totalPrice, items, removeItem } = props
    const clazz = isOpenModal ? 'show' : ''

    return (
        <div className={`popup ${clazz}`} onMouseLeave={() => props.toggleShowModal(false)}>
            <div className="popup__content">
                <ul className="list-group">
                    {
                        items.map(item => {
                            return (
                                <li className="list-group-item" key={item.id}>
                                    <img src={`http://localhost:3000/${item.imageSrc}`} alt="product" />
                                    <div className="popup__text">{item.title} ({item.count})</div>
                                    <span onClick={() => removeItem(item.id)} className="popup__btn">&times;</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className="list-group-item total">Итого: {totalPrice}</p>
                <div className="popup__route">
                    <Link to="/cart" className="btn btn-warning">Перейти в корзину</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isOpenModal: state.cart.isOpenModal,
    items: state.cart.items,
    totalPrice: state.cart.total
})

const mapDispatchToProps = {
    toggleShowModal: actions.toggleShowModal,
    removeItem: actions.removeItemFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)
