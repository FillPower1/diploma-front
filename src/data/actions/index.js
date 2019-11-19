import { getData, getSpecificProduct, toggleFetching } from './products'
import { setFilter, setSearhField } from './filter'
import { setUserInfo, setEmptyUserInfo } from './user'
import { userRegisterFetch } from './auth'
import {
    addItemToCart, calcCart,
    removeAllFromCart,
    removeItemFromCart,
    setEmptyCart
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
    setEmptyCart,
    setUserInfo,
    setEmptyUserInfo,
    userRegisterFetch
}