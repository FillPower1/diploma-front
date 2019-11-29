import reducer, { initialState } from './filter'
import {
	SET_FILTER,
	SET_SEARCH_FIELD
} from '../action-types'

describe('filter reducer', () => {
	it('SET_FILTER', () => {
		const action = {
			type: SET_FILTER,
			payload: 'all'
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			filterBy: action.payload
		})
	})

	it('SET_SEARCH_FIELD', () => {
		const action = {
			type: SET_SEARCH_FIELD,
			payload: 'all'
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			searchField: action.payload
		})
	})
})