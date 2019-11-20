import React from 'react'
import { connect } from 'react-redux'

const Profile = props => {
	return (
		<div className="row">
			<div className="container">
				<div className="col">
					<div>{props.currentUser.firstName}</div>
					<div>{props.currentUser.lastName}</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(Profile)
