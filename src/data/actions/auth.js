import api from '../../api'
import { LOGIN_USER, AUTH_STATUS } from '../action-types'

export const userRegisterFetch = user => {
	return dispatch => {
		api.registration(user)
			.then(data => {

				if (data.status !== 201) {
					console.log('ss')
					return dispatch(setUserStatusAuth({ registered: false }))
				}
				console.log('dd')
				return dispatch(setUserStatusAuth({ registered: true }))
			})
	}
}

// const loginUser = userObj => ({
//     type: LOGIN_USER,
//     payload: userObj
// })

const setUserStatusAuth = statusObj => ({
	type: AUTH_STATUS,
	payload: statusObj
})