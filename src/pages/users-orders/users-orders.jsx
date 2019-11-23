import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../data/actions'
import Spinner from '../../components/common/spinner'
import UsersOrdersItems from './users-orders-items'
import './users-orders.scss'

class UsersOrders extends Component {
	componentDidMount() {
		this.props.setUsersOrders()
	}

	renderContent = (arr) => {
		return arr.map(item => {
			const { username, surname, phone, completed, items, notes } = item
			return (
				<tr key={item.id}>
					<td>
						<div className="user-info">
							<div className="user-name">Имя: <strong>{username}</strong></div>
							<div className="user-surname">Фамилия: <strong>{surname}</strong></div>
							<div className="user-phone">Телефон: <strong>{phone}</strong></div>
						</div>
					</td>
					<td>
						{
							items.map(item => {
								const { id, title, count } = item
								return <UsersOrdersItems key={id} title={title} count={count} />
							})
						}
					</td>
					<td>
						<div className="user-comments">
							{!notes ? 'Комментариев нет' : notes}
						</div>
					</td>
					<td>
						<div className="order-status">{!completed ? 'Не отправлен' : 'Отправлен'}</div>
					</td>
					<td className="orders-actions">
						<button className="order-btn btn-small">Отправить</button>
						<button className="order-btn btn-small">Удалить</button>
					</td>
				</tr>
			)
		})
	}

	render() {

		const { usersOrders } = this.props

		if (!usersOrders.length) {
			return <Spinner />
		}

		const orders = this.renderContent(usersOrders)

		return (
			<div className="orders">
				<div className="container">
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
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	usersOrders: state.usersOrders.orders
})

const mapDispatchToProps = {
	setUsersOrders: actions.setUsersOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersOrders)