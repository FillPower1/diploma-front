const initialState = {
    items: [],
    totalPrice: 0,
    totalCountItems: 0,
    isOpenModal: false,
    startingProductsPrices: [] // стартовые продукты (неизменные), пушатся только один раз
}

const updateCartItems = (state, item, newItem, itemIndex) => {
    // тут баг, стейт в этот момент item.count === 1, но показывает клиенту 0, а он должен удалять
    // элемент из массива корзины, не пойму в какой момент нужно сделать проверку, чтобы очистить массив корзины
    console.log(state.items)
    if (item && item.count === 0) {
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
    const { startingProductsPrices, items } = state
    const { id } = action.payload

    if (!startingProductsPrices.length ||
        !startingProductsPrices.find(item => item === action.payload)) {

        startingProductsPrices.push(action.payload)

    }

    const startingItem = state.startingProductsPrices.find(item => item.id === id)
    const itemIndex = items.findIndex(item => item.id === id)
    const item = items[itemIndex]

    let newItem = {}
    if (item) {
        newItem = {
            ...item,
            count: item.count + quantity,
            price: item.price + (quantity * startingItem.price)
        }
    } else {
        newItem = {
            ...action.payload,
            count: 1
        }
    }

    return {
        ...state,
        items: updateCartItems(state, item, newItem, itemIndex)
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