import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartModal from '../cart-modal'
import { toggleShowModal } from '../../actions/cart'
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
                </ul>
                <ul className="navigation-right">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={props.toggleShowModal}>
                        <i className="icon fa fa-shopping-cart"></i>
                        <span className="badge badge-light">{countItems}</span>
                    </button>
                    <button className="btn btn-outline-warning">Login</button>
                    <CartModal />
                </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    countItems: state.cart.items.length
})
 
export default connect(mapStateToProps, { toggleShowModal })(Header)
