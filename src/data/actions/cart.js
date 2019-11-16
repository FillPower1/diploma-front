import { toast } from "react-toastify"
import {
    ADD_TO_CART,
    REMOVE_ITEM_FROM_CART,
    REMOVE_ALL_FROM_CART,
    CALC_CART
} from '../action-types'

export const calcCart = () => ({ type: CALC_CART })

// добавляет товар в корзину при клике "Добавить в корзину" 
// также прибавляет +1 товар при клике на кнопку "+"
export const addItemToCart = (item) => dispatch => {
    dispatch({ type: ADD_TO_CART, payload: item })
    toast.info("Корзина обновлена!")
    dispatch(calcCart())
}

// уменьшает на -1 кол-во товаров при клике на "-"
export const removeItemFromCart = item => dispatch => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: item })
    toast.info("Корзина обновлена!")
    dispatch(calcCart())
}

export const removeAllFromCart = (item) => dispatch => {
    dispatch({ type: REMOVE_ALL_FROM_CART, payload: item })
    toast.info(`${item.title} успешно удален из корзины`)
    dispatch(calcCart())
}