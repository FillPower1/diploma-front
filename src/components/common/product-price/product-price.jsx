import React from 'react'

const ProductPrice = ({ price }) => {
    return (
        <>
            Цена: {price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
        </>
    )
}

export default ProductPrice
