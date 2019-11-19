import React from 'react'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from '../header'
import Authorization from '../../pages/authorization'
import { MainPage, CartOrder, CompleteOrder } from '../../pages'
import { ProductListContainer, ProductDetailsContainer, CartContainer } from '../../containers'
import 'react-toastify/dist/ReactToastify.css'
import './app.scss'

const App = () => {
	return (
		<>
			<Header />
			<Route path="/" exact component={MainPage} />
			<Route path="/auth" component={Authorization} />
			<Route path="/cart" exact component={CartContainer} />
			<Route path="/cart/order" exact component={CartOrder} />
			<Route path="/cart/order-complete" exact component={CompleteOrder} />
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

export default App
