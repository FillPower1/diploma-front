import * as actions from '.'
import { SET_EMPTY_USER_INFO } from '../action-types'

describe('user actions', () => {
	it('setEmptyUserInfo', () => {
		const expectedAction = {
			type: SET_EMPTY_USER_INFO
		}

		expect(actions.setEmptyUserInfo()).toEqual(expectedAction)
	})
})