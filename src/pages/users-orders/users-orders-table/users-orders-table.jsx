import React from 'react'
import UsersOrdersItems from '../users-orders-items'
import UsersOrdersModal from '../users-orders-modal'

const UsersOrdersTable = props => {

	const { id, username, surname,
		phone, completed, items, notes,
		updateOrder, deleteOrder } = props

	return (
		<tr>
			<td>
				<div className="user-info">
					<div className="user-name">Имя: <strong>{username}</strong></div>
					<div className="user-surname">Фамилия: <strong>{surname}</strong></div>
					<div className="user-phone">Телефон: <strong>{phone}</strong></div>
				</div>
			</td>
			<td>
				{items.map(item => {
					const { id, title, count } = item
					return <UsersOrdersItems key={id} title={title} count={count} />
				})}
			</td>
			<td>
				<div className="user-comments">
					{!notes ? 'Комментариев нет' : notes}
				</div>
			</td>
			<td>
				<div className="order-status">{!completed ? 'Не завершен' : 'Завершен'}</div>
			</td>
			<td className="orders-actions">
				<div className="order-btn">
					<div className="tooltip">
						<UsersOrdersModal
							completed={completed}
							id={id}
							icon="done"
							label="Завершить заказ?"
							onUpdateOrder={updateOrder}
						/>
						<span className="tooltiptext tooltiptext-top">Завершить</span>
					</div>
				</div>
				<div className="order-btn">
					<div className="tooltip">
						<UsersOrdersModal
							id={id}
							icon="delete"
							label="Удалить заказ?"
							onUpdateOrder={deleteOrder}
						/>
						<span className="tooltiptext tooltiptext-bottom">Удалить</span>
					</div>
				</div>
			</td>
		</tr>
	)
}

export default UsersOrdersTable