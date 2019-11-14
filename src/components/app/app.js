import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../header'
import MainPage from '../pages/main'
import CartPage from '../pages/cart'
import ProductDetails from '../product-details'
import { ProductListContainer } from '../../containers'
import './app.scss'

const App = () => {
    return (
        <>
            <Header />
            <Route path="/" exact component={MainPage} />
            <Route path="/products" exact component={ProductListContainer} />
            <Route path="/products/:productId" render={
                ({ match }) => <ProductDetails productId={match.params.productId} />
            } />
            <Route path="/cart" component={CartPage} />
        </>
    )
}

export default App
