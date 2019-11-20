import React from 'react'
import PropTypes from 'prop-types'

const Tab = props => {
	const { activeTab, title, onClickTabItem } = props
    
	let clazz = 'tab-list-item'
	if (activeTab === title) {
		clazz += ' tab-list-active'
	}

	return (
		<li 
			className={clazz} 
			onClick={() => onClickTabItem(title)}>
			{title}
		</li>
	)
}

Tab.propTypes = {
	activeTab: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	onClickTabItem: PropTypes.func.isRequired
}

export default Tab
