const initialState = {
    products: null,
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_SUCCESS':
            return {
                ...state,
                isFetching: action.isFetching,
                products: action.payload
            }
        case 'GET_DATA_FAIL':
            return { ...state, isFetching: false, error: action.payload }
        default:
            return state
    }
}

export default reducer