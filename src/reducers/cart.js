const initialState = {
    items: [],
    total: 0,
    countItems: 0,
    isOpenModal: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemId = action.payload.id
            const itemIndx = state.items.findIndex(item => item.id === itemId)
            const item = state.items[itemIndx]

            let newItem
            if (item) {
                newItem = {
                    ...item,
                    count: item.count + 1,
                    price: item.price + action.payload.price
                }
            } else {
                newItem = {
                    ...action.payload,
                    count: 1
                }
            }

            if (itemIndx < 0) {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        newItem
                    ]
                }
            } else {
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndx),
                        newItem,
                        ...state.items.slice(itemIndx + 1)
                    ]
                }
            }

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
        case 'CALC_CART':
            const total = state.items.reduce((sum, currentItem) => sum + currentItem.price, 0)
            const countItems = state.items.reduce((sum, currentItem) => sum + currentItem.count, 0)
            return { ...state, total, countItems }
        default:
            return state
    }
}

export default reducer