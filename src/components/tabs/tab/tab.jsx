import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        onClickTabItem: PropTypes.func.isRequired
    }

    onClickTabItem = () => {
        const { id, onClickTabItem } = this.props
        onClickTabItem(id)
    }

    render() {
        const { activeTab, id } = this.props
        let className = 'tab-list-item'

        if (activeTab === id) {
            className += ' tab-list-active'
        }

        return (
            <li className={className} onClick={this.onClickTabItem}>
                {id}
            </li>
        )
    }
}

export default Tab
