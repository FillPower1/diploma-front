import { SET_USERS_ORDERS_SUCCESS } from '../../data/action-types'
import * as actions from '../../data/actions'


describe('users-orders actions', () => {
	it('setOrders', () => {
		const expectedAction = {
			type: SET_USERS_ORDERS_SUCCESS,
			payload: [1, 2, 3]
		}

		expect(actions.setOrders(expectedAction.payload)).toEqual(expectedAction)
	})
})