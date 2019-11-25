import React from 'react'
import UsersOrdersContainer from '../../containers/users-orders'
import './users-orders.scss'

const UsersOrders = props => {
	return (
		<div className="orders">
			<div className="container">
				<UsersOrdersContainer />
			</div>
		</div>
	)
}

export default UsersOrders