import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../data/actions'
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

	// обновление количества заказов сделанных юзером
	if (props.currentUser !== {}) {
		props.countOrders(props.currentUser.email)
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
							{props.userInfo.message ? <div>{props.userInfo.message}</div> : null}
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
		isFetching: state.user.isFetching,
		currentUser: state.auth.currentUser
	}
}

const mapDispatchToProps = {
	countOrders: actions.countOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteOrder)
