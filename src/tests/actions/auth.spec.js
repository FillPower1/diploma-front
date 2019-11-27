// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import fetchMock from 'fetch-mock'
// import expect from 'expect'
import * as actions from '../../data/actions'

import {
	LOGIN_USER, AUTH_STATUS, LOGOUT_USER,
	UPDATE_CURRENT_USER, SET_COUNT_ORDERS,
	SET_EMPTY_ORDERS
} from '../../data/action-types'

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

describe('auth actions', () => {
	it('setUserStatusAuth', () => {
		const expectedAction = {
			type: AUTH_STATUS,
			payload: [1, 2, 3]
		}
		expect(actions.setUserStatusAuth(expectedAction.payload)).toEqual(expectedAction)
	})
})

// describe('async actions', () => {
// 	afterEach(() => {
// 		fetchMock.reset()
// 		fetchMock.restore()
// 	})

// 	it('userLoginFetch', () => {
// 		fetchMock.getOnce(`/auth/login`, {
// 			headers: { 'content-type': 'application/json' },
// 			body: { data: [1, 2, 3], status: 'ok' }
// 		})
// 	})

// 	const expectedActions = [actions.setEmptyUserInfo(), actions.loginUser([1, 2, 3], actions.setUserStatusAuth(false))]
// 	const store = mockStore({})

// 	return store.dispatch(actions.userLoginFetch().then)
// })