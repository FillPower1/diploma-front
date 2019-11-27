import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import * as actions from '../../data/actions'
import CartModal from '../cart-modal'
import Popup from "reactjs-popup"

import './header.scss'

const Header = (props) => {
	const { totalCountItems, currentUser } = props

	const logoutUserHandler = () => {
		// удаление token из localStorage
		localStorage.removeItem("token")
		// удаление из Redux хранилища
		props.logoutUser()
		props.history.push('/auth') // тут почему-то Redirect не работает, поэтому я использовал history
	}

	return (
		<header className="navbar-fixed">
			<nav className="grey darken-2">
				<div className="container">
					<div className="nav-wrapper">
						<Link to="/" className="brand-logo">GoodStore</Link>
						<ul className="right">
							{currentUser.role === 'admin' &&
								<li>
									<Link to="/users-orders" className="yellow-text">Заказы</Link>
								</li>
							}
							<li><Link to="/">Главная</Link></li>
							<li><Link to="/products" >Товары</Link></li>
							<li><Link to="/cart" >Корзина</Link></li>
							<li>
								{currentUser.firstName
									? <Link to="/profile">Профиль</Link>
									: <Link to="/auth">Регистрация/Вход</Link>
								}
							</li>
							<li>
								{currentUser.firstName
									? <Link to="#" onClick={logoutUserHandler}>Выход</Link>
									: null
								}
							</li>
							<li>
								<Popup position="bottom center" on="hover"
									trigger={
										<Link to="#">
											<i className="icon fa fa-shopping-cart"></i>
											<span className="badge">{totalCountItems}</span>
										</Link>
									}>
									<CartModal />
								</Popup>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

const mapStateToProps = state => ({
	totalCountItems: state.cart.totalCountItems,
	searchField: state.filter.searchField,
	currentUser: state.auth.currentUser
})

const mapDispatchToProps = {
	setSearhField: actions.setSearhField,
	logoutUser: actions.logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
