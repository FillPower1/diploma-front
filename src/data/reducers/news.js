import {
	SET_NEWS, SET_CURRENT_NEWS, SET_NEWS_REQUEST,
	SET_CHANGE_NEWS, DELETE_CURRENT_NEWS
} from '../action-types'

const initialState = {
	newsList: [],
	currentNews: {},
	ischangedNews: false,
	editingCurrentdNews: {},
	isFetching: true
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_NEWS_REQUEST:
		return { ...state, isFetching: true }
	case SET_NEWS:
		return { ...state, newsList: action.payload, isFetching: false }
	case SET_CURRENT_NEWS:
		return { ...state, currentNews: action.payload, isFetching: false }
	case SET_CHANGE_NEWS:
		return { ...state, ischangedNews: action.payload }
	case DELETE_CURRENT_NEWS:
		return { ...state, currentNews: {} }
	default:
		return state
	}
}

export default reducer