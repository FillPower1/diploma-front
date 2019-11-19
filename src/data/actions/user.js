export const setUserInfo = data => {
	return dispatch => {
		dispatch({
			type: 'FETCH_USER_REQUEST'
		})

		dispatch({
			type: 'FETCH_USER_SUCCESS',
			payload: data
		})
	}
}

export const setEmptyUserInfo = () => ({
	type: 'SET_EMPTY_USER_INFO'
})