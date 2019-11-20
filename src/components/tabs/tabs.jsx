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
		const { children } = this.props
		const { activeTab } = this.state

		return (
			<div className="tabs-wrap">
				<ul className="tab-list">
					{children.map(child => {
						const { title } = child.props

						return (
							<Tab
								key={title}
								title={title}
								activeTab={activeTab}
								onClickTabItem={this.clickTabItemHandler}
							/>
						)
					})}
				</ul>
				<div className="tab-content">
					{children.map(child => {
						if (child.props.title !== activeTab) return null
						return child.props.children
					})}
				</div>
			</div>
		)
	}
}

export default Tabs