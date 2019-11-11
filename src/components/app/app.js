import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import Header from '../header'
import MainPage from '../pages/main'
import CartPage from '../pages/cart'
import ProductListContainer from '../containers/product-list-container'
import './app.scss'

const App = () => {
    return (
        <Container>
            <Header />
            <Route path="/" exact component={MainPage} />
            <Route path="/products" component={ProductListContainer} />
            <Route path="/cart" component={CartPage} />
        </Container>
    )
}

export default App
