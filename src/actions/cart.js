import api from '../api'

export const toggleShowModal = (bool) => ({
    type: 'TOGGLE_SHOW_MODAL',
    payload: bool
})

export const calcCart = () => ({ type: 'CALC_CART' })

export const addItemToCart = (item) => dispatch => {
    api.getSpecificProduct(item.id)
        .then(data => {
            dispatch({ type: 'ADD_TO_CART', payload: data })
            dispatch(calcCart())
        })
}

export const removeItemToCart = (item) => dispatch => {
    api.getSpecificProduct(item.id)
        .then(data => {
            dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: data })
            dispatch(calcCart())
        })
}

export const removeAllFromCart = (itemId) => dispatch => {
    dispatch({ type: 'REMOVE_ALL_FROM_CART', payload: itemId })
    dispatch(calcCart())
}