import React from 'react'
import Popup from 'reactjs-popup'

const UsersOrdersModal = props => {

	const { id, onUpdateOrder, icon, label, completed } = props

	if (completed) {
		return <i className="material-icons">{icon}</i>
	} else {
		return (
			<Popup modal on="click" position="top center"
				trigger={<i className="material-icons">{icon}</i>}>
				{close => (
					<div className="modal-order">
						<div className="modal-order__content">
							<div>{label}</div>
						</div>
						<div className="modal-order__footer">
							<button
								className="btn-small"
								onClick={() => {
									onUpdateOrder(id)
									close()
								}}>
								Да
							</button>
							<button
								onClick={() => close()}
								className="btn-small">
								Нет
							</button>
						</div>
					</div>
				)}
			</Popup>
		)
	}
}

export default UsersOrdersModal