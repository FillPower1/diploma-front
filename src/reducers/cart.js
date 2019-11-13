const initialState = {
    items: [],
    totalPrice: 0,
    totalCountItems: 0,
    isOpenModal: false,
    startingProductsPrices: new Set()
}

const updateCartItems = (state, newItem, itemIndex) => {
    if (newItem && newItem.count < 1) {
        return [
            ...state.items.slice(0, itemIndex),
            ...state.items.slice(itemIndex + 1)
        ]
    }

    return [
        ...state.items.slice(0, itemIndex),
        newItem,
        ...state.items.slice(itemIndex + 1)
    ]
}

const updateCart = (state, action, quantity) => {
    const itemId = action.payload.id
    state.startingProductsPrices.add(action.payload)
    const startingProducts = [...state.startingProductsPrices].find(item => item.id === itemId)
    const itemIndx = state.items.findIndex(item => item.id === itemId)
    const item = state.items[itemIndx]

    let newItem
    if (item) {
        newItem = {
            ...item,
            count: item.count + quantity,
            price: item.price + quantity * startingProducts.price
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
            items: updateCartItems(state, newItem, itemIndx)
        }
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
            const totalPrice = state.items.reduce((sum, currentItem) => sum + currentItem.price, 0)
            const totalCountItems = state.items.reduce((sum, currentItem) => sum + currentItem.count, 0)

            return { ...state, totalPrice, totalCountItems }
        default:
            return state
    }
}

export default reducer