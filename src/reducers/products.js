const initialState = {
    products: [],
    isFetching: true,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_REQUEST':
            return { ...state, isFetching: true, error: null }
        case 'GET_DATA_SUCCESS':
            return {
                ...state,
                isFetching: false,
                products: action.payload,
                error: null
            }
        case 'GET_DATA_FAIL':
            return { ...state, isFetching: false, error: action.payload }
        default:
            return state
    }
}

export default reducer