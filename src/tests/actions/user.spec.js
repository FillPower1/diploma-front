import * as actions from '../../data/actions'
import { SET_EMPTY_USER_INFO } from '../../data/action-types'

describe('user actions', () => {
	it('setEmptyUserInfo', () => {
		const expectedAction = {
			type: SET_EMPTY_USER_INFO
		}

		expect(actions.setEmptyUserInfo()).toEqual(expectedAction)
	})
})