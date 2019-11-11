export const toggleShowModal = (bool) => ({
    type: 'TOGGLE_SHOW_MODAL',
    payload: bool
})

export const addItemToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item
})

export const calcCart = () => ({ type: 'CALC_CART' })