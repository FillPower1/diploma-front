import React from 'react'

const ProductImage = ({ img }) => {
    return (
        <img src={`/${img}`} alt="product-img" />
    )
}

export default ProductImage
