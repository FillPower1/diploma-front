import React from 'react'
import ProfileContainer from '../../containers/profile'
import './profile.scss'

const Profile = () => {
	return (
		<div className="row">
			<div className="container">
				<div className="col s6 offset-s3">
					<div className="profile-card">
						<ul className="collection with-header">
							<li className="collection-header">
								<h5>Профиль</h5>
							</li>
							<ProfileContainer />
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile