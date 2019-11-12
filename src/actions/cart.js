export const toggleShowModal = (bool) => ({
    type: 'TOGGLE_SHOW_MODAL',
    payload: bool
})

export const addItemToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item
})

export const calcCart = () => ({ type: 'CALC_CART' })

export const removeItemFromCart = (itemId) => dispatch => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId })
    dispatch(calcCart())
}