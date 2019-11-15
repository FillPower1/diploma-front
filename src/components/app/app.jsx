import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../header'
import MainPage from '../pages/main'
import CartPage from '../pages/cart'
import ProductDetails from '../product-details'
import { ToastContainer } from 'react-toastify'
import { ProductListContainer } from '../../containers'
import 'react-toastify/dist/ReactToastify.css'
import './app.scss'

const App = () => {
    return (
        <>
            <Header />
            <Route path="/" exact component={MainPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/products" exact component={ProductListContainer} />
            <Route path="/products/:productId" render={
                ({ match }) => <ProductDetails productId={match.params.productId} />
            } />
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
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
