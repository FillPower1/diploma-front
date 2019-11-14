import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartModal from '../cart-modal'
import * as actions from '../../actions'
import './header.scss'

const Header = (props) => {
    const { totalCountItems } = props
    return (
        <header>
            <nav className="grey darken-3">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">StoreApp</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Главное</Link></li>
                            <li><Link to="/products">Товары</Link></li>
                            <li><Link to="/cart">Корзина</Link></li>
                            <li><Link to="">Авторизация</Link></li>
                            <li>
                                <Link to="#" onMouseEnter={() => props.toggleShowModal(true)}>
                                    <i className="icon fa fa-shopping-cart"></i>
                                    <span className="new badge" data-badge-caption="">{totalCountItems}</span>
                                </Link>
                                <CartModal />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    totalCountItems: state.cart.totalCountItems
})

const mapDispatchToProps = {
    toggleShowModal: actions.toggleShowModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
