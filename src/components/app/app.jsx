import React from 'react'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from '../header'
import MainPage from '../pages/main'
import CartPage from '../pages/cart'
import { ProductListContainer, ProductDetailsContainer } from '../../containers'
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
                ({ match }) => <ProductDetailsContainer productId={match.params.productId} />
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
