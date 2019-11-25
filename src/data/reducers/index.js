import { combineReducers } from 'redux'
import productsReducer from './products'
import cartReducer from './cart'
import filterReducer from './filter'
import userReducer from './user'
import authReducer from './auth'
import usersOrdersReducer from './users-orders'
import newsReducer from './news'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
	items: productsReducer,
	cart: cartReducer,
	filter: filterReducer,
	form: formReducer,
	user: userReducer,
	auth: authReducer,
	usersOrders: usersOrdersReducer,
	news: newsReducer
})