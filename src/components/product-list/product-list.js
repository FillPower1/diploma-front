import React from 'react'
import { connect } from 'react-redux'
// import { Col, Row } from 'reactstrap'
import Spinner from '../spinner'
import Filter from '../filter'
import ProductListItem from '../product-list-item'
import { getData } from '../../actions/products'
import { setFilter, setSearhField } from '../../actions/filter'
import _ from 'lodash'

class ProductList extends React.Component {

    componentDidMount() {
        this.props.getData()
    }

    renderCards = (items) => {
        return items.map(item => (
            <ProductListItem key={item.id} {...item} />
        ))
    }

    render() {
        const { isFetching, items, setSearhField,
            setFilter, filter, searchField } = this.props

        const content = !isFetching ? <Spinner /> : this.renderCards(items)
        return (
            <React.Fragment>
                <Filter
                    setSearchField={setSearhField}
                    searchFieldValue={searchField}
                    filterBy={filter}
                    setFilter={setFilter} />
                {/* <Row> */}
                <div className="products">
                    {content}
                </div>
                {/* </Row> */}
            </React.Fragment>
        )
    }
}

const search = (items, str) => {
    if (str.length === 0) {
        return items
    }

    return items.filter(item => {
        return item.title.toLowerCase().indexOf(str.toLowerCase()) > -1
    })
}

const sortProducts = (items, filter, str) => {
    items = search(items, str)

    switch (filter) {
        case 'expensive':
            return _.orderBy(items, 'price', 'desc')
        case 'cheap':
            return _.orderBy(items, 'price', 'asc')
        default:
            return items
    }
}

const mapStateToProps = state => {
    return {
        items: sortProducts(state.items.products, state.filter.filterBy, state.filter.searchField),
        isFetching: state.items.isFetching,
        filter: state.filter.filterBy,
        searchField: state.filter.searchField
    }
}

export default connect(
    mapStateToProps,
    {
        setFilter,
        setSearhField,
        getData
    }
)(ProductList)
