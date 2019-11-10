import React from 'react'
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';
import './product-list-item.scss'

const ProductListItem = (props) => {
    const { title, imageSrc, price } = props

    return (
        // <div class="product-item">
        //     <img src={image} alt="img" />
        //     <div class="product-list">
        //         <h3>{title}</h3>
        //         <span class="price">1999</span>
        //         <button class="button">В корзину</button>
        //     </div>
        // </div>
        // <Card>
        //     <CardImg src={image} alt="Card image cap" />
        //     <CardBody>
        //         <CardTitle>{title}</CardTitle>
        //         <CardSubtitle>{author}</CardSubtitle>
        //         <CardText>{price}</CardText>
        //         <Button color="primary" className="text-center">Add to Cart</Button>
        //     </CardBody>
        // </Card>
        <div className="card-wrap">
            <div className="card-image">
                <img src={imageSrc} alt="img"/>
            </div>
            <h4 className="cart-title">{title}</h4>
            <div className="card-price">{price}</div>
            <button className="btn btn-primary">Add to Cart</button>
        </div>
    )
}

export default ProductListItem