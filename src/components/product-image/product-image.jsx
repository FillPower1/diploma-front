import React from 'react'

const ProductImage = ({ img }) => {
    return (
        <img src={`http://localhost:5000/${img}`} alt="product-img" />
    )
}

export default ProductImage
