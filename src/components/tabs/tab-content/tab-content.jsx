
const TabContent = props => {
	const { child, activeTab } = props

	if (child.props.title !== activeTab) return null
	return child.props.children
}

export default TabContent