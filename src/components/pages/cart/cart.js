import React from 'react'
import { connect } from 'react-redux'

const CartPage = (props) => {
    const { items } = props

    if (!items.length) {
        return <h2 className="text-center">Корзина пуста</h2>
    }

    return (
        <>
            <table className="table">
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
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{item.title}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary mr-1">
                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                        </button>
                                        {item.count}
                                        <button className="btn btn-sm btn-primary ml-1">
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                    <td>{item.price}.</td>
                                    <td>
                                        <button className="btn btn-sm btn-danger">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h2 className="total float-right">Итого: {props.totalPrice} руб.</h2>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        totalPrice: state.cart.total
    }
}

export default connect(mapStateToProps)(CartPage)