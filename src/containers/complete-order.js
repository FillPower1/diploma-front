import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../data/actions'
import Spinner from '../components/common/spinner'

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
			{props.isFetching ? <Spinner /> : userData()}
			{props.userInfo.message ? <div>{props.userInfo.message}</div> : null}
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
