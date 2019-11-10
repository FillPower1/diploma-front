const initialState = {
    items: [],
    isOpenModal: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, items: [...state.items, action.payload] }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case 'TOGGLE_SHOW_MODAL':
            return {
                ...state,
                isOpenModal: !state.isOpenModal
            }
        default:
            return state
    }
}

export default reducer