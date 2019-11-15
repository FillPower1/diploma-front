import React from 'react'
import { Link } from 'react-router-dom'
import './filter.scss'

class Filter extends React.Component {

    handleItemClick = (e) => {
        const { setFilter } = this.props
        const name = e.target.name
        setFilter(name)
    }

    render() {
        const { filterBy } = this.props

        return (
            <div className="row">
                <div className="col">
                    <Link
                        to="#"
                        name="all"
                        onClick={this.handleItemClick}
                        className={`waves-effect waves-light pink lighten-2 btn-small`}>
                        Все
                    </Link>
                </div>
                <div className="col">
                    <Link
                        to="#"
                        name="expensive"
                        onClick={this.handleItemClick}
                        className={`waves-effect waves-light btn-small blue lighten-1`}>
                        Сначала дорогие
                    </Link>
                </div>
                <div className="col">
                    <Link
                        to="#"
                        name="cheap"
                        onClick={this.handleItemClick}
                        className={`waves-effect waves-light btn-small ${filterBy === 'cheap' && 'active'}`}>
                        Сначала дешевые
                    </Link>
                </div>
            </div>
        )
    }
}

export default Filter
