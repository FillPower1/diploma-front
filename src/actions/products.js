import api from '../api'
export const toggleIsFetching = (isFetching) => ({ type: 'GET_DATA_REQUEST', isFetching })
export const getData = () => {
    return dispatch => {
        dispatch(toggleIsFetching(true))

        api.getData()
            .then(data => {
                dispatch(toggleIsFetching(false))
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

export const setProducts = items => ({
    type: 'SET_PRODUCTS',
    payload: items
})

export const setProductsEnd = items => ({
    type: 'SET_PRODUCTS_ENDED',
    payload: items
})