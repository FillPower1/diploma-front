import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import * as actions from '../../data/actions'
import Header from '../header'
import {
	News, CartOrder, CompleteOrder,
	Profile, UsersOrders, AddNews, EditNews,
	Authorization, Products, Cart
} from '../../pages'
import {
	ProductDetailsContainer,
	FullNewsItemContainer
} from '../../containers'
import 'react-toastify/dist/ReactToastify.css'
import './app.scss'

class App extends Component {

	componentDidMount() {
		this.props.getProfileFetch()
	}

	render() {
		return (
			<>
				<Header />
				<Route path="/" exact component={News} />
				<Route path="/auth" exact component={Authorization} />
				<Route path="/cart" exact component={Cart} />
				<Route path="/cart/order" exact component={CartOrder} />
				<Route path="/cart/order-complete" exact component={CompleteOrder} />
				<Route path="/profile" component={Profile} />
				<Route path="/products" exact component={Products} />
				<Route path="/users-orders" component={UsersOrders} />
				<Route path="/news-add" exact component={AddNews} />
				<Route path="/products/:productId" render={
					({ match }) => <ProductDetailsContainer productId={match.params.productId} />
				} />
				<Route path="/news/:id" render={
					({ match }) => <FullNewsItemContainer id={match.params.id} />
				} />
				<Route path="/news-edit/:id" render={
					({ match }) => <EditNews id={match.params.id} />
				} />
				<Route path="*" render={() => <Redirect to="/" />} />

				<ToastContainer
					position="bottom-right"
					autoClose={2500}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnVisibilityChange
					draggable
					pauseOnHover={false}
				/>
			</>
		)
	}
}

const mapDispatchToProps = {
	getProfileFetch: actions.getProfileFetch
}

export default connect(null, mapDispatchToProps)(App)
