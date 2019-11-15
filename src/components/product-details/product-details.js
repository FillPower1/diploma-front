import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../spinner'
import Tabs from '../tabs'
import * as actions from '../../actions'
import './product-details.scss'

const ProductDetails = (props) => {
    const { isFetching, product, addItemToCart } = props

    let content
    if (isFetching) {
        content = <Spinner />
    } else {
        const { imageSrc, description,
                price, title, video, id,
                characteristics:
                { amountOfMemory,
                    color,
                    processor,
                    camera,
                    diagonal,
                    resolution,
                    authentication,
                    additionals,
                    weight,
                    zoom
                 } } = product
        content = (
            <div className="product-info">
                <h2 className="product-title">{title}</h2>
                <div className="product-image">
                    <img src={`http://localhost:5000/${imageSrc}`} alt="product-img" />
                </div>
                <div className="product-descr">
                    <div className="product-price">
                        Цена: {price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                    </div>
                    <div className="product-add-to-cart">
                        <button className="btn" onClick={() => addItemToCart(product)}>Добавить в корзину</button>
                    </div>
                    <Tabs>
                        <div label="Описание">
                            <p>{description}</p>
                        </div>
                        <div label="Характеристики">
                            <table className="striped">
                                <tbody>
                                    <tr>
                                        <td>Объем памяти</td>
                                        <td>{amountOfMemory} GB</td>
                                    </tr>
                                    <tr>
                                        <td>Процессор</td>
                                        <td>{processor}</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>{color}</td>
                                    </tr>
                                    <tr>
                                        <td>Диагональ</td>
                                        <td>{diagonal}</td>
                                    </tr>
                                    <tr>
                                        <td>Разрешение</td>
                                        <td>{resolution}</td>
                                    </tr>
                                    <tr>
                                        <td>Камера</td>
                                        <td>{camera}</td>
                                    </tr>
                                    <tr>
                                        <td>Зум</td>
                                        <td>{zoom}</td>
                                    </tr>
                                    <tr>
                                        <td>Аутентификация</td>
                                        <td>{authentication}</td>
                                    </tr>
                                    <tr>
                                        <td>Доп. возможности</td>
                                        <td>{additionals}</td>
                                    </tr>
                                    <tr>
                                        <td>Вес</td>
                                        <td>{weight}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div label="Обзор">
                            <iframe src={video} title={id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }

    return (
        <div className="product-wrap">
            <div className="container">
                <div className="row">
                    <div className="col s9 offset-s2">
                        {
                            content
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

class ProductDetailsContainer extends React.Component {

    componentDidMount() {
        const productId = this.props.productId
        this.props.getSpecificProduct(productId)
    }

    render() {
        return (
            <ProductDetails {...this.props} />
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.items.specificProduct,
        isFetching: state.items.isFetching
    }
}

const mapDispatchToProps = {
    getSpecificProduct: actions.getSpecificProduct,
    toggleFetching: actions.toggleFetching,
    addItemToCart: actions.addItemToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer)
