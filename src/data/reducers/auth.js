import { LOGIN_USER, AUTH_STATUS, LOGOUT_USER, UPDATE_CURRENT_USER } from '../action-types'

const initialState = {
	currentUser: {},
	registered: false,
	countOrders: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case LOGIN_USER:
		return { ...state, currentUser: action.payload }
	case LOGOUT_USER:
		return { ...state, currentUser: {} }
	case AUTH_STATUS:
		return { ...state, registered: action.payload.registered}
	case UPDATE_CURRENT_USER:
		return { ...state, currentUser: action.payload }
	case 'SET_COUNT_ORDERS':
		return { ...state, countOrders: action.payload }
	default:
		return state
	}
}

export default reducer
