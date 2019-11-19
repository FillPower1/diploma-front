import {
	FETCH_DATA_REQUEST,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAIL,
	FETCH_PRODUCT_SUCCESS
} from '../action-types'

const initialState = {
	products: [],
	specificProduct: null,
	isFetching: true,
	error: null
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case FETCH_DATA_REQUEST:
		return { ...state, isFetching: true, error: null }
	case FETCH_DATA_SUCCESS:
		return {
			...state,
			isFetching: false,
			products: action.payload,
			error: null
		}
	case FETCH_PRODUCT_SUCCESS:
		return {
			...state,
			specificProduct: action.payload,
			isFetching: false,
			error: null
		}
	case FETCH_DATA_FAIL:
		return { ...state, isFetching: false, error: action.payload }
	default:
		return state
	}
}

export default reducer