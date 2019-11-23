import api from '../../api'
import { SET_USERS_ORDERS } from '../action-types'

export const setUsersOrders = data => {
	return dispatch => {
		api.getUsersOrders()
			.then(res => {
				console.log(res)
				dispatch({
					type: SET_USERS_ORDERS,
					payload: res
				})
			})
			.catch(err => console.log(err))
	}
}