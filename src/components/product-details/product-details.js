import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../spinner'
import * as actions from '../../actions'

const ProductDetails = (props) => {
    const { isFetching, product } = props

    let content
    if (isFetching) {
        content = <Spinner />
    } else {
        const { imageSrc, description, price } = product
        content = (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={`http://localhost:3000/${imageSrc}`} alt="product-img" />
                </div>
                <div className="card-content">
                    {price}
                </div>
                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab"><a href="#test4">Описание</a></li>
                        <li className="tab"><a className="active" href="#test5">Характеристики</a></li>
                        <li className="tab"><a href="#test6">Обзор</a></li>
                    </ul>
                </div>
                <div className="card-content grey lighten-4">
                    <div id="test4"><p>{description}</p></div>
                    <div id="test5">Характеристики</div>
                    <div id="test6">Обзор</div>
                </div>
            </div>
        )
    }

    return (
        <div className="product-wrap">
            <div className="container">
                <div className="row">
                    <div className="col s6 offset-s3">
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
    getSpecificProduct: actions.getSpecificProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer)
