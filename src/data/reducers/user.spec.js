import reducer, { initialState } from './user'
import { SET_EMPTY_USER_INFO, FETCH_USER_SUCCESS } from '../action-types'

describe('user reducer', () => {
	it('SET_EMPTY_USER_INFO', () => {
		const action = {
			type: SET_EMPTY_USER_INFO
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			userInfo: {},
			isFetching: true
		})
	})

	it('FETCH_USER_SUCCESS', () => {
		const action = {
			type: FETCH_USER_SUCCESS,
			payload: { 'a': 1 }
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			userInfo: action.payload,
			isFetching: false
		})
	})
})