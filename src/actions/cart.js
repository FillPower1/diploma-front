import { toast } from "react-toastify"

export const calcCart = () => ({ type: 'CALC_CART' })

// добавляет товар в корзину при клике "Добавить в корзину" 
// также прибавляет +1 товар при клике на кнопку "+"
export const addItemToCart = (item) => dispatch => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
    toast.info("Товар добавлен!") // уведомление toast при клике, то есть диспатче запускается сразу же после клика
    dispatch(calcCart())
}

// уменьшает на -1 кол-во товаров при клике на "-"
export const removeItemFromCart = item => dispatch => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: item })
    // ворнинг начинает вылетать в этом моменте, если раскоментировать и попытаться удалить, сделав кол-во 0 или просто удалить
    // нужно перейти на другю страничку, чтобы вышел ворнинг
    // toast.info("Корзина обновлена!")
    dispatch(calcCart())
}

export const removeAllFromCart = (item) => dispatch => {
    dispatch({ type: 'REMOVE_ALL_FROM_CART', payload: item })
    // тут тоже самое, что и выше
    // toast.info(`${item.title} успешно удален из корзины`)
    dispatch(calcCart())
}