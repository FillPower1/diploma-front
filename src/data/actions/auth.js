import api from '../../api'
import { reset } from 'redux-form'
import { toast } from "react-toastify"
import { LOGIN_USER, AUTH_STATUS } from '../action-types'

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
					dispatch(reset('registrationForm'))
					return dispatch(setUserStatusAuth({ registered: false }))
				}
				console.log('success')
				toast.success("Вы успешно зарегистрировались")
				return dispatch(setUserStatusAuth({ registered: true }))
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
					dispatch(reset('loginForm'))
					return toast.error(res.data.message)
				}
				console.log('все ок', res)
				localStorage.setItem("token", res.data.token)
				toast.success("Вы вошли успешно")
				return dispatch(loginUser(res.data.user))
			})
	}
}