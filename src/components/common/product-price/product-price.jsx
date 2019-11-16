import React from 'react'

const ProductPrice = ({ price }) => {
    return (
        <>
            {price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
        </>
    )
}

export default ProductPrice
