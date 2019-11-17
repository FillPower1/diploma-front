import { getData, getSpecificProduct, toggleFetching } from './products'
import { setFilter, setSearhField } from './filter'
import {
    addItemToCart, calcCart, removeAllFromCart,
    removeItemFromCart, setEmptyCart
} from './cart'

export {
    calcCart,
    setFilter,
    setSearhField,
    getData,
    addItemToCart,
    removeItemFromCart,
    removeAllFromCart,
    getSpecificProduct,
    toggleFetching,
    setEmptyCart
}