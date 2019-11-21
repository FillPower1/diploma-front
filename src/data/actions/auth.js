import api from '../../api'
// import { reset } from 'redux-form'
import { toast } from "react-toastify"
import { LOGIN_USER, AUTH_STATUS, LOGOUT_USER } from '../action-types'

const setUserStatusAuth = status => ({
	type: AUTH_STATUS,
	payload: status
})

export const userRegisterFetch = user => {
	return dispatch => {
		api.registration(user)
			.then(data => {

				if (data.status !== 201) {
					console.log('conflict, такой email зарегистрирован')
					toast.error("Такой email уже зарегистрирован, попробуйте другой")
					// dispatch(reset('registrationForm'))
					return dispatch(setUserStatusAuth({ registered: false }))
				}
				console.log('success')
				toast.success("Вы успешно зарегистрировались")
				dispatch(setUserStatusAuth({ registered: true }))
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
				if (res.status !== 200) {
					console.log('ошибка', res)
					// dispatch(reset('loginForm'))
					return toast.error(res.data.message)
				}

				console.log('все ок', res)
				localStorage.setItem("token", res.data.token)
				toast.success("Вы вошли успешно")
				dispatch(loginUser(res.data.user))
			})
	}
}

export const getProfileFetch = () => {
	return dispatch => {
		const token = localStorage.token
		if (token) {
			api.getProfile(token)
				.then(res => {
					if (res.status !== 200) {
						console.log(res)
						localStorage.removeItem("token")
						return
					}

					console.log(res)
					dispatch(loginUser(res.data))
				})
		}
	}
}

export const logoutUser = () => {
	toast.info("Вы вышли из системы")
	return {
		type: LOGOUT_USER
	}
}