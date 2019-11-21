import api from '../../api'
// import { reset } from 'redux-form'
import { toast } from "react-toastify"
import { LOGIN_USER, AUTH_STATUS, LOGOUT_USER } from '../action-types'
import { setEmptyUserInfo } from '../actions/user'

const setUserStatusAuth = status => ({
	type: AUTH_STATUS,
	payload: status
})

export const userRegisterFetch = user => {
	return dispatch => {
		api.registration(user)
			.then(() => {
				console.log('success')
				toast.success("Вы успешно зарегистрировались")
				dispatch(setUserStatusAuth({ registered: true }))
			})
			.catch(err => {
				console.log('conflict, такой email зарегистрирован', err)
				toast.error("Такой email уже зарегистрирован, попробуйте другой")
				// dispatch(reset('registrationForm'))
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
				console.log('все ок', res)
				localStorage.setItem("token", res.data.token)
				toast.success("Вы вошли успешно")
				dispatch(loginUser(res.data.user))
			})
			.catch(err => {
				console.log('ошибка', err)
				// dispatch(reset('loginForm'))
				return toast.error(err.response.data.message)
			})
	}
}

export const getProfileFetch = () => {
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

export const logoutUser = () => {
	toast.info("Вы вышли из системы")
	return {
		type: LOGOUT_USER
	}
}