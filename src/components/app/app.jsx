import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import * as actions from '../../data/actions'
import Header from '../header'
import Authorization from '../../pages/authorization'
import { MainPage, CartOrder, CompleteOrder, Profile } from '../../pages'
import { ProductListContainer, ProductDetailsContainer, CartContainer } from '../../containers'
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
				<Route path="/" exact component={MainPage} />
				<Route path="/auth" component={Authorization} />
				<Route path="/cart" exact component={CartContainer} />
				<Route path="/cart/order" exact component={CartOrder} />
				<Route path="/cart/order-complete" exact component={CompleteOrder} />
				<Route path="/profile" component={Profile} />
				<Route path="/products" exact component={ProductListContainer} />
				<Route path="/products/:productId" render={
					({ match }) => <ProductDetailsContainer productId={match.params.productId} />
				} />

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
