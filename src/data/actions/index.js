import { getData, getSpecificProduct, toggleFetching } from './products'
import { setFilter, setSearhField } from './filter'
import { setUserInfo, setEmptyUserInfo } from './user'
import {
	userRegisterFetch,
	userLoginFetch,
	getUserProfile,
	logoutUser,
	updateProfile,
	countOrder,
	setUserStatusAuth
} from './auth'
import {
	addItemToCart, calcCart,
	removeAllFromCart,
	removeItemFromCart,
	setEmptyCart,
} from './cart'

import {
	setUsersOrders,
	setCompleteOrder,
	deleteUserOrder,
	setOrders
} from './users-orders'
import {
	setNewsList,
	setCurrentNews,
	addNewNews,
	deleteNews,
	setFalseChangedNews,
	editNews
} from './news'

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
	getUserProfile,
	logoutUser,
	updateProfile,
	countOrder,
	setUsersOrders,
	setCompleteOrder,
	deleteUserOrder,
	setNewsList,
	setCurrentNews,
	addNewNews,
	deleteNews,
	setFalseChangedNews,
	editNews,
	setUserStatusAuth,
	setOrders
}