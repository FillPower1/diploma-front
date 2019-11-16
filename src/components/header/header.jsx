import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../data/actions'
import CartModal from '../cart-modal'
import Search from '../search'
import Popup from "reactjs-popup"

import './header.scss'

const Header = (props) => {
	const { totalCountItems, searchField, setSearhField } = props

	return (
		<header>
			<div className="navbar-fixed">
				<nav className="grey darken-3">
					<div className="container">
						<div className="nav-wrapper">
							<Link to="/" className="brand-logo">StoreApp</Link>
							<ul className="right">
								<li><Search field={searchField} onSearh={setSearhField} /></li>
								<li><Link to="/">Главная</Link></li>
								<li><Link to="/products">Товары</Link></li>
								<li><Link to="/cart">Корзина</Link></li>
								<li><Link to="/auth">Авторизация</Link></li>
								<li>
									<Popup position="bottom center" on="hover"
										trigger={
											<Link to="#">
												<i className="icon fa fa-shopping-cart"></i>
												<span className="new badge" data-badge-caption="">{totalCountItems}</span>
											</Link>
										}>
										<CartModal />
									</Popup>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}

const mapStateToProps = state => ({
	totalCountItems: state.cart.totalCountItems,
	searchField: state.filter.searchField
})

const mapDispatchToProps = {
	setSearhField: actions.setSearhField
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
