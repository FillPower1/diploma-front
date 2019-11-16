import React from 'react'
import Filter from '../filter'
import Spinner from '../common/spinner'
import ErrorIndicator from '../common/error-indicator'
import ProductListItem from './product-list-item'

const ProductList = (props) => {
    const { isFetching, products, setSearhField, onAddToCart,
        setFilter, filter, searchField, error, selectedProductHandler } = props

    const renderCards = (
        products.map(item => (
            <ProductListItem
                {...item}
                key={item.id}
                onAddToCart={onAddToCart}
                onSelectedProductHandler={selectedProductHandler}
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
