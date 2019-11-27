import reducer, { initialState } from '../../data/reducers/cart'
import {
	REMOVE_ALL_FROM_CART,
	CALC_CART,
	SET_EMPTY_CART
} from '../../data/action-types'

describe('cart reducer', () => {
	it('REMOVE_ALL_FROM_CART', () => {
		const action = {
			type: REMOVE_ALL_FROM_CART
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			items: []
		})
	})

	it('CALC_CART', () => {
		const initialState = {
			items: [{
				id: "507a1234e3d14ea6a8a5566ffbdbf800",
				title: "Apple iPhone 11 Pro Max 64GB Space Gray",
				price: 84990,
				count: 1
			}],
			totalPrice: 0,
			totalCountItems: 0,
			startingProductsPrices: new Set()
		}

		const action = {
			type: CALC_CART
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			totalPrice: 84990,
			totalCountItems: 1
		})
	})

	it('SET_EMPTY_CART', () => {
		const action = {
			type: SET_EMPTY_CART
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			items: []
		})
	})
})