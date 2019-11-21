import React from 'react'
import TabTitle from '../tab-title'
import TabContent from '../tab-content'

const Tab = props => {
	const { list, activeTab, clickTabItemHandler } = props

	return (
		<>
			<div className="tabs-wrap">
				<ul className="tab-list">
					{list.map(child => {
						const { title } = child.props

						return (
							<TabTitle
								key={title}
								title={title}
								activeTab={activeTab}
								onClickTabItem={clickTabItemHandler}
							/>
						)
					})}
				</ul>
				<div className="tab-content">
					{list.map(child => {
						return <TabContent child={child} activeTab={activeTab} />
					})}
				</div>
			</div>
		</>
	)
}

export default Tab