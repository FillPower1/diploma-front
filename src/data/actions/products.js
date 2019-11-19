import api from '../../api'
import {
	FETCH_DATA_REQUEST,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAIL,
	FETCH_PRODUCT_SUCCESS,
} from '../action-types'

export const getData = () => {
	return dispatch => {
		dispatch({
			type: FETCH_DATA_REQUEST
		})

		api.getData()
			.then(data => {
				dispatch({
					type: FETCH_DATA_SUCCESS,
					payload: data
				})
			})
			.catch(error => {
				dispatch({
					type: FETCH_DATA_FAIL,
					payload: error
				})
			})
	}
}

export const toggleFetching = () => {
	return dispatch => {
		dispatch({
			type: FETCH_DATA_REQUEST
		})
	}
}

export const getSpecificProduct = (id) => {
	return dispatch => {
		api.getSpecificProduct(id)
			.then(product => {
				dispatch({
					type: FETCH_PRODUCT_SUCCESS,
					payload: product
				})
			})
			.catch(error => {
				dispatch({
					type: FETCH_DATA_FAIL,
					payload: error
				})
			})
	}
}