import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import './cart.scss'

const CartPage = (props) => {
    const { items, removeItem, onIncrease, onDecrease } = props

    const emptyCart = (
        <h4 className="center-align">Корзина пуста</h4>
    )

    const renderTableCart = (
        <>
            <table className="bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Наименование</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, i) => {
                            return (
                                <tr key={item.id}>
                                    <th>{i + 1}</th>
                                    <td>{item.title}</td>
                                    <td>
                                        <button onClick={() => onDecrease(item)} className="btn btn-small">
                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                        </button>
                                        <span className="cart-counter">{item.count}</span>
                                        <button onClick={() => onIncrease(item)} className="btn btn-small">
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <span className="cart-price">
                                            {item.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                                        </span>
                                    </td>
                                    <td>
                                        <button onClick={() => removeItem(item.id)} className="btn btn-small">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h4 className="right-align">
                Итого: {props.totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
            </h4>
        </>
    )

    return (
        <div className="cart">
            <div className="container">
                {!items.length ? emptyCart : renderTableCart}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        totalPrice: state.cart.totalPrice
    }
}

const mapDispatchToProps = {
    onIncrease: actions.addItemToCart,
    onDecrease: actions.removeItemFromCart,
    removeItem: actions.removeAllFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)