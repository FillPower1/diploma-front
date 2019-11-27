import reducer, { initialState } from '../../data/reducers/auth'
import {
	LOGIN_USER, AUTH_STATUS,
	LOGOUT_USER, UPDATE_CURRENT_USER,
	SET_COUNT_ORDERS, SET_EMPTY_ORDERS
} from '../../data/action-types'

describe('authorization reducer', () => {
	it('LOGIN_USER', () => {
		const action = {
			type: LOGIN_USER,
			payload: [1, 2, 3] // не важно что тут, главное что payload кладется в currentUser
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			currentUser: action.payload
		})
	})

	it('LOGOUT_USER', () => {
		const action = {
			type: LOGOUT_USER,
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			currentUser: {}
		})
	})

	it('AUTH_STATUS', () => {
		const action = {
			type: AUTH_STATUS,
			payload: {
				registered: [1, 2, 3]
			}
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			registered: action.payload.registered
		})
	})

	it('UPDATE_CURRENT_USER', () => {
		const action = {
			type: UPDATE_CURRENT_USER,
			payload: [1, 2, 3]
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			currentUser: action.payload
		})
	})

	it('SET_COUNT_ORDERS', () => {
		const action = {
			type: SET_COUNT_ORDERS,
			payload: [1, 2, 3]
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			countOrders: action.payload
		})
	})

	it('SET_EMPTY_ORDERS', () => {
		const action = {
			type: SET_EMPTY_ORDERS
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			countOrders: 0
		})
	})
})