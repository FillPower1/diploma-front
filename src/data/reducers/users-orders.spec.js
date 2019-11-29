import reducer, { initialState } from './users-orders'
import { SET_USERS_ORDERS_REQUEST, SET_USERS_ORDERS_SUCCESS } from '../action-types'

describe('users-orders reducer', () => {
	it('SET_USERS_ORDERS_REQUEST', () => {
		const action = {
			type: SET_USERS_ORDERS_REQUEST,
			payload: true
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			isFetching: action.payload
		})
	})

	it('SET_USERS_ORDERS_SUCCESS', () => {
		const action = {
			type: SET_USERS_ORDERS_SUCCESS,
			payload: [1, 2, 3]
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			orders: action.payload,
			isFetching: false
		})
	})
})