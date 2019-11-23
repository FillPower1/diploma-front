import { SET_USERS_ORDERS_REQUEST, SET_USERS_ORDERS_SUCCESS } from '../action-types'

const initialState = {
	orders: [],
	isFetching: true
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_USERS_ORDERS_REQUEST:
		return { ...state, isFetching: action.payload }
	case SET_USERS_ORDERS_SUCCESS:
		return { ...state, orders: action.payload, isFetching: false }
	default:
		return state
	}
}

export default reducer