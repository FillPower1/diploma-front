import api from '../../api'
import { toast } from "react-toastify"
import {
	LOGIN_USER, AUTH_STATUS, LOGOUT_USER,
	UPDATE_CURRENT_USER, SET_COUNT_ORDERS,
	SET_EMPTY_ORDERS
} from '../action-types'
import { setEmptyUserInfo } from '../actions/user'

export const setUserStatusAuth = status => ({
	type: AUTH_STATUS,
	payload: status
})

export const userRegisterFetch = user => {
	return dispatch => {
		api.registration(user)
			.then(() => {
				// console.log('success')
				toast.success("Вы успешно зарегистрировались")
				dispatch(setUserStatusAuth({ registered: true }))
			})
			.catch(err => {
				console.log('conflict, такой email зарегистрирован', err)
				toast.error("Такой email уже зарегистрирован, попробуйте другой")
				return dispatch(setUserStatusAuth({ registered: false }))
			})
	}
}

const loginUser = userObj => ({
	type: LOGIN_USER,
	payload: userObj
})

export const userLoginFetch = data => {
	return dispatch => {
		api.login(data)
			.then(res => {
				setEmptyUserInfo() // очищаю юзера, если он зарегистрировался покупая товар
				// console.log('все ок', res)
				localStorage.setItem("token", res.data.token)
				toast.success("Вы вошли успешно")
				dispatch(loginUser(res.data.user))
				dispatch(setUserStatusAuth(false)) // убираю статус логина (true/false), если юзер зарегистрировался в данный момент
			})
			.catch(err => {
				console.log('ошибка', err)
				return toast.error(err.response.data.message)
			})
	}
}

export const getUserProfile = () => {
	return dispatch => {
		const token = localStorage.token
		if (token) {
			api.getProfile(token)
				.then(res => {
					// console.log(res)
					dispatch(loginUser(res.data))
				})
				.catch(err => {
					// console.log({err})
					localStorage.removeItem("token")
				})
		}
	}
}

const setEmptyOrders = () => ({
	type: SET_EMPTY_ORDERS
})

export const logoutUser = () => {
	toast.info("Вы вышли из системы")
	return dispatch => {
		dispatch(setEmptyOrders())
		dispatch({
			type: LOGOUT_USER
		})
	}
}

export const updateProfile = (id, data) => {
	return dispatch => {
		api.updateProfile(id, data)
			.then(res => {
				// console.log(res)

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
				// console.log(res)
				dispatch({
					type: SET_COUNT_ORDERS,
					payload: res
				})
			})
	}
}