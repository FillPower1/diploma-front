import { combineReducers } from 'redux'
import productsReducer from './products'
import cartReducer from './cart'
import filterReducer from './filter'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    items: productsReducer,
    cart: cartReducer,
    filter: filterReducer,
    form: formReducer
})