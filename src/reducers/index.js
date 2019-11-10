import { combineReducers } from 'redux'
import productsReducer from './products'
import cartReducer from './cart'
import filterReducer from './filter'

export default combineReducers({
    items: productsReducer,
    cart: cartReducer,
    filter: filterReducer
})