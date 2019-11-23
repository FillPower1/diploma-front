import React from 'react'

const UsersOrdersItems = props => {
	const { title, count } = props
	return (
		<div className="order">
			<div className="order__title">{title}</div>
			<div>Количество: {count}</div>
		</div>
	)
}

export default UsersOrdersItems