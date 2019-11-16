import {
    ADD_TO_CART,
    REMOVE_ITEM_FROM_CART,
    REMOVE_ALL_FROM_CART,
    CALC_CART,
} from '../action-types'

const initialState = {
    items: [],
    totalPrice: 0,
    totalCountItems: 0,
    startingProductsPrices: new Set()
}

const updateCartItems = (items, newItem, itemIndex) => {
    if (newItem && newItem.count < 1) {
        return [
            ...items.slice(0, itemIndex),
            ...items.slice(itemIndex + 1)
        ]
    }

    if (itemIndex === -1) {
        return [
            ...items,
            newItem
        ]
    }

    return [
        ...items.slice(0, itemIndex),
        newItem,
        ...items.slice(itemIndex + 1)
    ]
}

const updateCartItem = (startingProducts, item, action, quantity) => {
    if (item) {
        return {
            ...item,
            count: item.count + quantity,
            price: item.price + quantity * startingProducts.price
        }
    } else {
        return {
            ...action.payload,
            count: 1
        }
    }
}

const updateOrder = (state, action, quantity) => {
    const itemId = action.payload.id
    state.startingProductsPrices.add(action.payload)
    const startingProducts = [...state.startingProductsPrices].find(item => item.id === itemId)
    const itemIndx = state.items.findIndex(item => item.id === itemId)
    const item = state.items[itemIndx]

    const newItem = updateCartItem(startingProducts, item, action, quantity)

    return {
        ...state,
        items: updateCartItems(state.items, newItem, itemIndx)
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return updateOrder(state, action, 1)
        case REMOVE_ITEM_FROM_CART:
            return updateOrder(state, action, -1)
        case REMOVE_ALL_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        case CALC_CART:
            const totalPrice = state.items.reduce((sum, currentItem) => sum + currentItem.price, 0)
            const totalCountItems = state.items.reduce((sum, currentItem) => sum + currentItem.count, 0)

            return { ...state, totalPrice, totalCountItems }
        default:
            return state
    }
}

export default reducer