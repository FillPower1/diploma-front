import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../data/actions'
import ProfileField from '../components/profile-field'

class Profile extends Component {

	state = {
		firstNameEditMode: false,
		lastNameEditMode: false,
		emailEditMode: false
	}

	activateEditMode = (e) => {
		this.setState({
			[e.target.name + 'EditMode']: true,
			[e.target.name]: this.props.currentUser[e.target.name]
		})
	}

	deactivateEditMode = (e) => {
		this.setState({ [e.target.name + 'EditMode']: false })

		const { currentUser: { userId } } = this.props
		const value = this.state[e.target.name]
		this.props.updateProfile(userId, { [e.target.name]: value }) // запрос на обновление профиля
	}

	onFieldChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { email } = this.props.currentUser
		this.props.getCountOrders(email)

		return (
			<>
				<ProfileField
					title="Имя"
					name="firstName"
					label={this.props.currentUser.firstName}
					editMode={this.state.firstNameEditMode}
					onActivateEditMode={this.activateEditMode}
					value={this.state.firstName}
					onFieldChange={this.onFieldChange}
					onDeactivateEditMode={this.deactivateEditMode}
				/>
				<ProfileField
					title="Фамилия"
					name="lastName"
					label={this.props.currentUser.lastName}
					editMode={this.state.lastNameEditMode}
					onActivateEditMode={this.activateEditMode}
					value={this.state.lastName}
					onFieldChange={this.onFieldChange}
					onDeactivateEditMode={this.deactivateEditMode}
				/>
				<ProfileField
					title="Логин"
					name="email"
					label={this.props.currentUser.email}
					editMode={this.state.emailEditMode}
					onActivateEditMode={this.activateEditMode}
					value={this.state.email}
					onFieldChange={this.onFieldChange}
					onDeactivateEditMode={this.deactivateEditMode}
				/>
				<li className="collection-item">
					Заказов сделано: {this.props.countOrders}
				</li>
			</>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser,
	countOrders: state.auth.countOrders
})
const mapDispatchToProps = {
	updateProfile: actions.updateProfile,
	getCountOrders: actions.countOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
