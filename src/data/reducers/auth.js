import { LOGIN_USER, AUTH_STATUS } from '../action-types'

const initialState = {
	currentUser: {},
	registered: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case LOGIN_USER:
		return { ...state, currentUser: action.payload }
	case AUTH_STATUS:
		return {...state, registered: action.payload.registered}
	default:
		return state
	}
}

export default reducer
