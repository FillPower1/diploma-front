import reducer, { initialState } from './news'
import {
	SET_NEWS, SET_CURRENT_NEWS, SET_NEWS_REQUEST,
	SET_CHANGE_NEWS, DELETE_CURRENT_NEWS
} from '../action-types'

describe('news/posts reducer', () => {
	it('SET_NEWS_REQUEST', () => {
		const action = {
			type: SET_NEWS_REQUEST
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			isFetching: true
		})
	})

	it('SET_NEWS', () => {
		const action = {
			type: SET_NEWS,
			payload: [1, 2, 3]
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			newsList: action.payload,
			isFetching: false
		})
	})

	it('SET_CURRENT_NEWS', () => {
		const action = {
			type: SET_CURRENT_NEWS,
			payload: {title: 'title', description: "description"}
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			currentNews: action.payload,
			isFetching: false
		})
	})

	it('SET_CHANGE_NEWS', () => {
		const action = {
			type: SET_CHANGE_NEWS,
			payload: true
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			ischangedNews: action.payload,
		})
	})

	it('DELETE_CURRENT_NEWS', () => {
		const action = {
			type: DELETE_CURRENT_NEWS
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			currentNews: {},
		})
	})
})