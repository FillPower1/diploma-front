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
        const { filterBy, setSearchField } = this.props

        return (
            <div className="row">
                <div className="col">
                    <Link
                        to="#"
                        name="all"
                        onClick={this.handleItemClick}
                        className={`waves-effect waves-light btn-small ${filterBy === 'all' && 'active'}`}>
                        Все
                    </Link>
                </div>
                <div className="col">
                    <Link
                        to="#"
                        name="expensive"
                        onClick={this.handleItemClick}
                        className={`aves-effect waves-light btn-small ${filterBy === 'expensive' && 'active'}`}>
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
                <div className="col s3 offset-s3">
                    <input
                        className="form-control"
                        placeholder="Поиск..."
                        value={this.props.searchFieldValue}
                        onChange={e => setSearchField(e.target.value)} />
                </div>
            </div>
        )
    }
}

export default Filter
