import React from 'react'

const UsersOrdersItems = props => {
	const { title, count } = props
	return (
		<div className="order">
			<div className="order__title">{title}</div>
			<div className="order__count">Количество: {count}</div>
		</div>
	)
}

export default UsersOrdersItems