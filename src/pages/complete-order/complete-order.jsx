import React from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import './complete-order.scss'

const CompleteOrder = props => {
    return (
        <>
            <div className="row">
                <div className="container">
                    <div className="col s7 offset-s3">
                        <div className="complete-order">
                            <div className="complete-order__title">
                                Заказ #{Math.floor(Math.random() * 1000)} успешно оформлен
                            </div>
                            <div className="complete-order__subtitle">Спасибо за заказ!</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    }
}

export default connect(mapStateToProps)(CompleteOrder)
