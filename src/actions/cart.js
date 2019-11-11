export const toggleShowModal = () => ({
    type: 'TOGGLE_SHOW_MODAL'
})

export const addItemToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item
})

export const calcCart = () => ({ type: 'CALC_CART' })