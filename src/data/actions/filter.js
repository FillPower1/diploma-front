import {
	SET_FILTER,
	SET_SEARCH_FIELD
} from '../action-types'

export const setFilter = filter => ({
	type: SET_FILTER,
	payload: filter
})

export const setSearhField = str => ({
	type: SET_SEARCH_FIELD,
	payload: str
})