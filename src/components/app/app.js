import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../header'
import MainPage from '../pages/main'
import CartPage from '../pages/cart'
import { ProductListContainer } from '../../containers'
import './app.scss'

const App = () => {
    return (
        <>
            <Header />
            <Route path="/" exact component={MainPage} />
            <Route path="/products" component={ProductListContainer} />
            <Route path="/cart" component={CartPage} />
        </>
    )
}

export default App
