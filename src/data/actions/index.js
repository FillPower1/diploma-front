import { getData, getSpecificProduct, toggleFetching } from './products'
import { setFilter, setSearhField } from './filter'
import { setUserInfo, setEmptyUserInfo } from './user'
import {
	userRegisterFetch,
	userLoginFetch,
	getProfileFetch,
	logoutUser,
	updateProfile,
	countOrder
} from './auth'
import {
	addItemToCart, calcCart,
	removeAllFromCart,
	removeItemFromCart,
	setEmptyCart,
} from './cart'

import { setUsersOrders } from './users-orders'

export {
	calcCart,
	setFilter,
	setSearhField,
	getData,
	addItemToCart,
	removeItemFromCart,
	removeAllFromCart,
	getSpecificProduct,
	toggleFetching,
	setEmptyCart,
	setUserInfo,
	setEmptyUserInfo,
	userRegisterFetch,
	userLoginFetch,
	getProfileFetch,
	logoutUser,
	updateProfile,
	countOrder,
	setUsersOrders
}