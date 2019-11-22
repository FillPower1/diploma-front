import { FETCH_USER_SUCCESS, SET_EMPTY_USER_INFO, UPDATE_CURRENT_USER } from '../action-types'
import api from '../../api'

export const setUserInfo = data => {
	console.log(data)
	return dispatch => {
		dispatch({
			type: FETCH_USER_SUCCESS,
			payload: data
		})
	}
}

export const setEmptyUserInfo = () => ({
	type: SET_EMPTY_USER_INFO
})

//
export const updateProfile = (id, data) => {
	return dispatch => {
		api.updateProfile(id, data)
			.then(res => {
				console.log(res)

				dispatch({
					type: UPDATE_CURRENT_USER,
					payload: res.user
				})
			})
			.catch(err => console.log(err))
	}
}

export const countOrder = email => {
	return dispatch => {
		api.getCountOrders(email)
			.then(res => {
				console.log(res)
				dispatch({
					type: 'SET_COUNT_ORDERS',
					payload: res
				})
			})
	}
}