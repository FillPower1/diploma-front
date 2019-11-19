import api from '../../api'
import { LOGIN_USER, AUTH_STATUS } from '../action-types'

export const userRegisterFetch = user => {
    return dispatch => {
        api.registration(user)
            .then(data => {

                if (data.status !== 201) {
                    return dispatch(setUserStatusAuth(data.status))
                }

                return dispatch(setUserStatusAuth(data.status))
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