import React from 'react'
import './search.scss'

const Search = (props) => {

    const { field, onSearh } = props

    return (
        <form className="search">
            <input
                className="input"
                type="search"
                value={field}
                placeholder="поиск..."
                onChange={e => onSearh(e.target.value)}
            />
        </form>
    )
}

export default Search
