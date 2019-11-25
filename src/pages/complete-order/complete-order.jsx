import React from 'react'
import CompleteOrderContainer from '../../containers/complete-order'
import './complete-order.scss'

const CompleteOrder = () => {
	return (
		<div className="complete">
			<div className="row">
				<div className="container">
					<div className="col s7 offset-s3">
						<div className="complete-order">
							<div className="complete-order__title">
								Заказ успешно оформлен.
							</div>
							<div className="complete-order__subtitle">Спасибо за заказ!</div>
							<CompleteOrderContainer />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CompleteOrder