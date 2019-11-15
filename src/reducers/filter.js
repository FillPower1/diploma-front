import {
    SET_FILTER,
    SET_SEARCH_FIELD
} from '../action-types'

const initialState = {
    searchField: '',
    filterBy: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.payload
            }
        case SET_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            }
        default:
            return state
    }
}

export default reducer
