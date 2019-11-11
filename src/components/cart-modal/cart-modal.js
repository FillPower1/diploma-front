import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './cart-modal.scss'

const CartModal = (props) => {
    const { isOpenModal, totalPrice } = props
    const clazz = isOpenModal ? 'show' : ''

    return (
        <div className={`popup ${clazz}`}>
            <div className="popup__content">
                <ul className="list-group">
                    <li className="list-group-item">
                        <img src="https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg" alt="product"/>
                        <div className="popup__text">Dapibus ac facilisis i</div>
                        <span className="btn btn-danger">&times;</span>
                    </li>
                </ul>
                <p className="list-group-item total">Итого: {totalPrice}</p>
                <div className="popup__route">
                    <Link to="/cart" className="btn btn-primary">Перейти в корзину</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isOpenModal: state.cart.isOpenModal,
    totalPrice: state.cart.total
})

export default connect(mapStateToProps)(CartModal)
