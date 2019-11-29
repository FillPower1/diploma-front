import {
	FETCH_USER_SUCCESS, SET_EMPTY_USER_INFO
} from '../action-types'

export const setUserInfo = data => {
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