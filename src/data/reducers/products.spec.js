import reducer, { initialState } from './products'
import {
	FETCH_DATA_REQUEST,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAIL,
	FETCH_PRODUCT_SUCCESS
} from '../action-types'

describe('filter reducer', () => {
	it('FETCH_DATA_REQUEST', () => {
		const action = {
			type: FETCH_DATA_REQUEST
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			isFetching: true,
			error: null
		})
	})

	it('FETCH_DATA_SUCCESS', () => {
		const action = {
			type: FETCH_DATA_SUCCESS,
			payload: [1, 2, 3]
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			products: action.payload,
			isFetching: false,
			error: null
		})
	})

	it('FETCH_PRODUCT_SUCCESS', () => {
		const action = {
			type: FETCH_PRODUCT_SUCCESS,
			payload: [{ 1: 1, 2: 2 }]
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			specificProduct: action.payload,
			isFetching: false,
			error: null
		})
	})

	it('FETCH_DATA_FAIL', () => {
		const action = {
			type: FETCH_DATA_FAIL,
			payload: "error"
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			isFetching: false,
			error: action.payload
		})
	})
})