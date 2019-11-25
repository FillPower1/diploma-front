import api from '../../api'
import { toast } from "react-toastify"
import {
	SET_NEWS, SET_CURRENT_NEWS, SET_NEWS_REQUEST,
	SET_CHANGE_NEWS, DELETE_CURRENT_NEWS
} from '../action-types'

export const setNewsList = () => {
	return dispatch => {
		dispatch({
			type: SET_NEWS_REQUEST
		})

		dispatch(deleteCurrentNews)

		api.getNews()
			.then(res => {
				dispatch({
					type: SET_NEWS,
					payload: res
				})
			})
	}
}

const deleteCurrentNews = ({
	type: DELETE_CURRENT_NEWS
})

export const setCurrentNews = id => {
	return dispatch => {
		dispatch({
			type: SET_NEWS_REQUEST
		})

		api.getSpecificNews(id)
			.then(res => {
				dispatch({
					type: SET_CURRENT_NEWS,
					payload: res
				})
			})
			.catch(err => {
				toast.error("Что-то пошло не так...")
				console.log(err)
			})
	}
}

export const addNewNews = data => {
	return dispatch => {
		api.createNews(data)
			.then(res => {
				console.log(res)
				dispatch(setTrueChangedNews())
				toast.success("Вы успешно добавили новость")
			})
			.catch(err => {
				toast.error("Что-то пошло не так...")
				dispatch(setFalseChangedNews())
				console.log(err)
			})
	}
}

export const setFalseChangedNews = () => {
	return dispatch => {
		dispatch({
			type: SET_CHANGE_NEWS,
			payload: false
		})
	}
}

const setTrueChangedNews = () => {
	return dispatch => {
		dispatch({
			type: SET_CHANGE_NEWS,
			payload: true
		})
	}
}

export const deleteNews = id => {
	return dispatch => {
		api.deleteNews(id)
			.then(res => {
				console.log(res)
				dispatch(setNewsList())
			})
			.catch(err => {
				toast.error("Что-то пошло не так...")
				console.log(err)
			})
	}
}

export const editNews = (id, data) => {
	return dispatch => {
		api.editNews(id, data)
			.then(res => {
				console.log(res)
				dispatch(setTrueChangedNews())
			})
			.catch(err => {
				console.log(err)
				toast.error("Что-то пошло не так...")
			})
	}
}