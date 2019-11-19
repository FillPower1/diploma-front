import api from '../../api'
import { reset } from 'redux-form'
import { toast } from "react-toastify"
import { LOGIN_USER, AUTH_STATUS } from '../action-types'

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

// const loginUser = userObj => ({
//     type: LOGIN_USER,
//     payload: userObj
// })

const setUserStatusAuth = status => ({
	type: AUTH_STATUS,
	payload: status
})