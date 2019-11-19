import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tab from './tab'

import './tabs.scss'

class Tabs extends Component {
    static propTypes = {
    	children: PropTypes.instanceOf(Array).isRequired
    }

    state = {
    	activeTab: this.props.children[0].props.id
    }

    clickTabItemHandler = (tab) => {
    	this.setState({ activeTab: tab })
    }

    render() {
    	// console.log('---', this.props)
    	const { children } = this.props
    	const { activeTab } = this.state
    	// console.log(this.props.children[1].props.selected)
    	if (this.props.login) {
    		console.log(this.props.login)
    		this.setState({ activeTab: this.props.children[1].props.id })
    	}


    	return (
    		<div className="tabs-wrap">
    			<ul className="tab-list">
    				{children.map((child) => {
    					const { id } = child.props

    					return (
    						<Tab
    							activeTab={activeTab}
    							key={id}
    							id={id}
    							onClickTabItem={this.clickTabItemHandler}
    						/>
    					)
    				})}
    			</ul>
    			<div className="tab-content">
    				{children.map((child) => {
    					if (child.props.id !== activeTab) return undefined
    					return child.props.children
    				})}
    			</div>
    		</div>
    	)
    }
}

export default Tabs