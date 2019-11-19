import { SET_EMPTY_USER_INFO, FETCH_USER_SUCCESS } from '../action-types'

const initialState = {
	userInfo: {},
	isFetching: true
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_EMPTY_USER_INFO:
		return { ...state, userInfo: {}, isFetching: true }
	case FETCH_USER_SUCCESS:
		return { ...state, isFetching: false, userInfo: action.payload }
	default:
		return state
	}
}

export default reducer
