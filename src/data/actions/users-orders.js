import api from '../../api'
import { SET_USERS_ORDERS_SUCCESS, SET_USERS_ORDERS_REQUEST } from '../action-types'

const setOrders = data => ({
	type: SET_USERS_ORDERS_SUCCESS,
	payload: data
})

export const setUsersOrders = () => {
	return dispatch => {
		dispatch({
			type: SET_USERS_ORDERS_REQUEST,
			payload: true
		})
		api.getUsersOrders()
			.then(res => {
				dispatch(setOrders(res))
			})
			.catch(err => console.log(err))
	}
}

export const setCompleteOrder = id => {
	return dispatch => {
		api.updateUserOrder(id)
			.then(res => {
				dispatch(setOrders(res.data))
			})
	}
}

export const deleteUserOrder = id => {
	return dispatch => {
		api.deleteUserOrder(id)
			.then(res => {
				dispatch(setOrders(res.data))
			})
	}
}