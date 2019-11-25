import api from '../../api'
import { SET_NEWS, SET_CURRENT_NEWS, SET_CURRENT_REQUEST } from '../action-types'

export const setNewsList = () => {
	return dispatch => {
		dispatch({
			type: SET_CURRENT_REQUEST
		})

		api.getNews()
			.then(res => {
				dispatch({
					type: SET_NEWS,
					payload: res
				})
			})
	}
}

export const setCurrentNews = id => {
	return dispatch => {
		dispatch({
			type: SET_CURRENT_REQUEST
		})

		api.getSpecificNews(id)
			.then(res => {
				dispatch({
					type: SET_CURRENT_NEWS,
					payload: res
				})
			})
	}
}

export const addNewNews = data => {
	return dispatch => {
		api.createNews(data)
			.then(res => {
				console.log(res)
			})
	}
}