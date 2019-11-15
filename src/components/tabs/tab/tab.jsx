import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClickTabItem: PropTypes.func.isRequired
    }

    onClickTabItem = () => {
        const { label, onClickTabItem } = this.props
        onClickTabItem(label)
    }

    render() {
        const { activeTab, label } = this.props
        let className = 'tab-list-item'

        if (activeTab === label) {
            className += ' tab-list-active'
        }

        return (
            <li className={className} onClick={this.onClickTabItem}>
                {label}
            </li>
        )
    }
}

export default Tab
