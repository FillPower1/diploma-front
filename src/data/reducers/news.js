import { SET_NEWS, SET_CURRENT_NEWS, SET_CURRENT_REQUEST } from '../action-types'

const initialState = {
	newsList: [],
	currentNews: {},
	isFetching: true
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_CURRENT_REQUEST:
		return { ...state, isFetching: true }
	case SET_NEWS:
		return { ...state, newsList: action.payload, isFetching: false }
	case SET_CURRENT_NEWS:
		return { ...state, currentNews: action.payload, isFetching: false }
	default:
		return state
	}
}

export default reducer