import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tab from './tab'

import './tabs.scss'

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    }

    state = {
        activeTab: this.props.children[0].props.label
    }

    clickTabItemHandler = (tab) => {
        this.setState({ activeTab: tab })
    }

    render() {
        const { children } = this.props
        const { activeTab } = this.state

        return (
            <div className="tabs-wrap">
                <ul className="tab-list">
                    {children.map((child) => {
                        const { label } = child.props

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClickTabItem={this.clickTabItemHandler}
                            />
                        )
                    })}
                </ul>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined
                        return child.props.children
                    })}
                </div>
            </div>
        )
    }
}

export default Tabs