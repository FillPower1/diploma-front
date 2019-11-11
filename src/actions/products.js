import api from '../api'

export const getData = () => {
    return dispatch => {
        dispatch({
            type: 'GET_DATA_REQUEST'
        })

        api.getData()
            .then(data => {
                dispatch({
                    type: 'GET_DATA_SUCCESS',
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'GET_DATA_FAIL',
                    payload: error
                })
            })
    }
}
