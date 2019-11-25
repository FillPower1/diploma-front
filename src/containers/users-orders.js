import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../data/actions'
import Spinner from '../components/common/spinner'
import UsersOrdersTable from '../components/users-orders-table'

class UsersOrders extends Component {

	componentDidMount() {
		this.props.setUsersOrders()
	}

	updateOrder = (id) => {
		this.props.setCompleteOrder(id)
	}

	deleteOrder = (id) => {
		this.props.deleteUserOrder(id)
	}

	renderContent = (arr) => {
		return arr.map(item => {
			return (
				<UsersOrdersTable
					key={item.id}
					{...item}
					deleteOrder={this.deleteOrder}
					updateOrder={this.updateOrder}
				/>
			)
		})
	}

	render() {

		const { usersOrders, isFetching } = this.props

		if (isFetching) {
			return <Spinner />
		}

		if (!usersOrders.length) {
			return <h4 className="center-align">Заказов нет</h4>
		}

		const orders = this.renderContent(usersOrders)

		return (
			<table className="highlight responsive-table">
				<thead>
					<tr>
						<th>Покупатель</th>
						<th>Заказы</th>
						<th className="center-align">Комментарии</th>
						<th>Статус заказа</th>
						<th>Действия</th>
					</tr>
				</thead>
				<tbody>
					{orders}
				</tbody>
			</table>
		)
	}
}

const mapStateToProps = state => ({
	usersOrders: state.usersOrders.orders,
	isFetching: state.usersOrders.isFetching
})

const mapDispatchToProps = {
	setUsersOrders: actions.setUsersOrders,
	setCompleteOrder: actions.setCompleteOrder,
	deleteUserOrder: actions.deleteUserOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersOrders)