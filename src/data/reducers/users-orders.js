import { SET_USERS_ORDERS } from '../action-types'

const initialState = {
	orders: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_USERS_ORDERS:
		return { ...state, orders: action.payload }
	default:
		return state
	}
}

export default reducer