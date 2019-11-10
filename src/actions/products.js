import api from '../api'
export const getData = () => {
    return dispatch => {
        api.getData()
            .then(data => {
                dispatch({
                    type: 'GET_DATA_SUCCESS',
                    payload: data,
                    isFetching: true
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
