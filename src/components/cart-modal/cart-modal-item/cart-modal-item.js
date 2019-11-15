import React from 'react'

const CartModalItem = (item) => {

    const { onRemoveItem, id, imageSrc, title, count } = item

    return (
        <li className="collection-item" key={id}>
            <img src={`http://localhost:5000/${imageSrc}`} alt="product" />
            <div className="popup__text">{title} ({count})</div>
            <span className="popup__btn" onClick={() => onRemoveItem(item)}>&times;</span>
        </li>
    )
}

export default CartModalItem
