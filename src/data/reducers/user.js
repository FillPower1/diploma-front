const initialState = {
    userInfo: {},
    isFetching: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EMPTY_USER_INFO':
            return { ...state, userInfo: {}, isFetching: true }
        case 'FETCH_USER_REQUEST':
            return { ...state }
        case 'FETCH_USER_SUCCESS':
            console.log('!!!')
            return { ...state, isFetching: false, userInfo: action.payload }
        default:
            return state
    }
}

export default reducer
