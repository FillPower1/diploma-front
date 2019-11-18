import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../components/common/spinner'
import './complete-order.scss'

const CompleteOrder = props => {

    const userData = () => {
        if (props.userInfo.password) {

            const { email, password } = props.userInfo

            return (
                <>
                    <h4>Ваши данные для входа</h4>
                    <div>Логин: {email}</div>
                    <div>Пароль: {password}</div>
                </>
            )
        }
    }

    return (
        <>
            <div className="row">
                <div className="container">
                    <div className="col s7 offset-s3">
                        <div className="complete-order">
                            <div className="complete-order__title">
                                Заказ успешно оформлен.
                            </div>
                            <div className="complete-order__subtitle">Спасибо за заказ!</div>
                            {props.isFetching ? <Spinner /> : userData()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        items: state.cart.items,
        userInfo: state.user.userInfo,
        isFetching: state.user.isFetching
    }
}

export default connect(mapStateToProps)(CompleteOrder)
