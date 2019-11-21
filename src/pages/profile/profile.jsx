import React from 'react'
import { connect } from 'react-redux'
import './profile.scss'

const Profile = props => {
	return (
		<div className="row">
			<div className="container">
				<div className="col s6 offset-s3">
					<div className="profile-card">
						<ul class="collection with-header">
							<li class="collection-header">
								<h5>Профиль</h5>
							</li>
							<li class="collection-item">
								Имя: {props.currentUser.firstName} <button className="btn btn-small">изменить</button>
							</li>
							<li class="collection-item">
								Фамилия: {props.currentUser.lastName}<button className="btn btn-small">изменить</button>
							</li>
							<li class="collection-item">
								Логин: {props.currentUser.email}<button className="btn btn-small">изменить</button>
							</li>
							<li class="collection-item">Заказов сделано: 0</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(Profile)
