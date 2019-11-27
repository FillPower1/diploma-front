import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../search'
import './filter.scss'

const Filter = (props) => {
	const { setFilter } = props
	const handleItemClick = (e) => {
		setFilter(e.target.name)
	}

	return (
		<div className="row">
			<div className="col">
				<Link
					to="#"
					name="all"
					onClick={handleItemClick}
					className="waves-effect grey darken-1 btn-small">
					Все
				</Link>
			</div>
			<div className="col">
				<Link
					to="#"
					name="expensive"
					onClick={handleItemClick}
					className="waves-effect waves-light btn-small red lighten-1">
					Сначала дорогие
				</Link>
			</div>
			<div className="col">
				<Link
					to="#"
					name="cheap"
					onClick={handleItemClick}
					className="waves-effect waves-light btn-small">
					Сначала дешевые
				</Link>
			</div>
			<div className="col offset-s5">
				<Search
					field={props.searchFieldValue}
					onSearh={props.setSearchField}
				/>
			</div>
		</div>
	)
}

export default Filter
