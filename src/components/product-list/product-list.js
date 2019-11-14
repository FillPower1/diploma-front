import React from 'react'
import Spinner from '../spinner'
import Filter from '../filter'
import ProductListItem from '../product-list-item'
import ErrorIndicator from '../error-indicator'

const ProductList = (props) => {
    const { isFetching, products, setSearhField, onAddToCart,
        setFilter, filter, searchField, error } = props

    const renderCards = (
        products.map(item => (
            <ProductListItem
                {...item}
                key={item.id}
                onAddToCart={onAddToCart}
            />
        ))
    )

    const content = isFetching ? <Spinner /> : renderCards

    if (error) {
        return <ErrorIndicator />
    }

    return (
        <main>
            <div className="container">
                <div className="filter-list">
                    <Filter
                        filterBy={filter}
                        setFilter={setFilter}
                        setSearchField={setSearhField}
                        searchFieldValue={searchField}
                    />
                </div>
                <div className="products">
                    {content}
                </div>
            </div>
        </main>
    )
}

export default ProductList
