import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartModal from '../cart-modal'
import * as actions from '../../actions'
import './header.scss'

const Header = (props) => {
    const { countItems } = props
    return (
        <header>
            <nav className="navigation">
                <ul className="navigation-left">
                    <li className="navigation__item logo">
                        <Link to="/" className="navigation__link">StoreApp</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/" className="navigation__link">Главное</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/products" className="navigation__link">Товары</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/cart" className="navigation__link">Корзина</Link>
                    </li>
                </ul>
                <ul className="navigation-right">
                    <button
                        className="btn btn-outline-secondary"
                        onMouseEnter={() => props.toggleShowModal(true)}>
                        <i className="icon fa fa-shopping-cart"></i>
                        <span className="badge badge-light">{countItems}</span>
                    </button>
                    <CartModal />
                    <button className="btn btn-outline-warning">Login</button>
                </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    countItems: state.cart.countItems
})

const mapDispatchToProps = {
    toggleShowModal: actions.toggleShowModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
