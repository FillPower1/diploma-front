import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tab from './tab'
import './tabs.scss'

class Tabs extends Component {
	static propTypes = {
		children: PropTypes.instanceOf(Array).isRequired
	}

	state = {
		activeTab: this.props.children[0].props.title
	}

	clickTabItemHandler = (tab) => {
		this.setState({ activeTab: tab })
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.login !== prevProps.login) {
			this.setState({ activeTab: this.props.activeTab })
		}
	}

	render() {
		return (
			<Tab 
				list={this.props.children} 
				activeTab={this.state.activeTab}
				clickTabItemHandler={this.clickTabItemHandler} />
		)
	}
}

export default Tabs