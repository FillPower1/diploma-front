import { toast } from "react-toastify"
import {
	ADD_TO_CART,
	REMOVE_ITEM_FROM_CART,
	REMOVE_ALL_FROM_CART,
	CALC_CART,
	SET_EMPTY_CART
} from '../action-types'

export const calcCart = () => ({ type: CALC_CART })

export const addItemToCart = (item) => dispatch => {
	dispatch({ type: ADD_TO_CART, payload: item })
	toast.info("Корзина обновлена!")
	dispatch(calcCart())
}

export const removeItemFromCart = item => dispatch => {
	dispatch({ type: REMOVE_ITEM_FROM_CART, payload: item })
	toast.info("Корзина обновлена!")
	dispatch(calcCart())
}

export const removeAllFromCart = (item) => dispatch => {
	dispatch({ type: REMOVE_ALL_FROM_CART, payload: item })
	toast.info(`${item.title} успешно удален из корзины`)
	dispatch(calcCart())
}

export const setEmptyCart = () => (dispatch) => {
	dispatch({ type: SET_EMPTY_CART })
	dispatch(calcCart())
}