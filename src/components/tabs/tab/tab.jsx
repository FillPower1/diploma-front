import React from 'react'
import PropTypes from 'prop-types'

const Tab = props => {
	const { activeTab, id, onClickTabItem } = props
    
	let clazz = 'tab-list-item'
	if (activeTab === id) {
		clazz += ' tab-list-active'
	}

	return (
		<li 
			className={clazz} 
			onClick={() => onClickTabItem(id)}>
			{id}
		</li>
	)
}

Tab.propTypes = {
	activeTab: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onClickTabItem: PropTypes.func.isRequired
}

export default Tab
