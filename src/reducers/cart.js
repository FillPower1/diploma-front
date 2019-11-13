const initialState = {
    items: [],
    total: 0,
    totalCountItems: 0,
    isOpenModal: false
}

const updateCart = (state, action, quantity) => {
    const item = state.items.find(item => item.id === action.payload.id)
    const itemIndex = state.items.findIndex(item => item.id === action.payload.id)

    console.log(item)
    console.log(action.payload)
    let newItem = {}
    if (item) {
        newItem = {
            ...item,
            count: item.count + quantity,
            price: item.price + (quantity * action.payload.price)
        }
    } else {
        newItem = {
            ...action.payload,
            count: 1
        }
    }

    return {
        ...state,
        items: [
            ...state.items.slice(0, itemIndex),
            newItem,
            ...state.items.slice(itemIndex + 1)
        ]
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return updateCart(state, action, 1)
        case 'REMOVE_ITEM_FROM_CART':
            return updateCart(state, action, -1)
        case 'REMOVE_ALL_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case 'TOGGLE_SHOW_MODAL':
            return {
                ...state,
                isOpenModal: action.payload
            }
        case 'CALC_CART':
            console.log(state)
            const total = state.items.reduce((sum, currentItem) => sum + currentItem.price, 0)
            const totalCountItems = state.items.reduce((sum, currentItem) => sum + currentItem.count, 0)
            return { ...state, total, totalCountItems }
        default:
            return state
    }
}

export default reducer