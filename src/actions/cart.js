export const toggleShowModal = (bool) => ({
    type: 'TOGGLE_SHOW_MODAL',
    payload: bool
})

export const calcCart = () => ({ type: 'CALC_CART' })

// добавляет товар в корзину при клике "Добавить в корзину" 
// также прибавляет +1 товар при клике на кнопку "+"
export const addItemToCart = (item) => dispatch => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
    dispatch(calcCart())
}

// уменьшает на -1 кол-во товаров при клике на "-"
export const removeItemFromCart = item => dispatch => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: item })
    dispatch(calcCart())
}

export const removeAllFromCart = (itemId) => dispatch => {
    dispatch({ type: 'REMOVE_ALL_FROM_CART', payload: itemId })
    dispatch(calcCart())
}