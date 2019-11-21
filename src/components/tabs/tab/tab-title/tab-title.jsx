import React from 'react'
import PropTypes from 'prop-types'

const TabTitle = props => {
	const { activeTab, title, onClickTabItem } = props

	let clazz = 'tab-list-item'
	if (activeTab === title) {
		clazz += ' tab-list-active'
	}


	return (
		<li
			key={title}
			className={clazz}
			onClick={() => onClickTabItem(title)}
		>
			{title}
		</li>
	)
}

TabTitle.propTypes = {
	activeTab: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	onClickTabItem: PropTypes.func.isRequired
}

export default TabTitle
