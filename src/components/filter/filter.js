import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import './filter.scss'

class Filter extends React.Component {

    handleItemClick = (e) => {
        const { setFilter } = this.props
        const name = e.target.name
        setFilter(name)
    }

    render() {
        const { filterBy, setSearchField } = this.props

        return (
            <Row className="mb-2">
                <Col>
                    <Button
                        name="all"
                        className={`${filterBy === 'all' && 'active'} mr-1`}
                        outline onClick={this.handleItemClick}>
                        Все
                    </Button>
                    <Button
                        name="expensive"
                        className={`${filterBy === 'expensive' && 'active'} mr-1`}
                        outline onClick={this.handleItemClick}>
                        Сначала дорогие
                    </Button>
                    <Button
                        name="cheap"
                        className={`${filterBy === 'cheap' && 'active'}`}
                        outline onClick={this.handleItemClick}>
                        Сначала дешевые
                    </Button>
                </Col>
                <Col lg="3">
                    <input
                        className="form-control"
                        placeholder="Поиск..."
                        value={this.props.searchFieldValue}
                        onChange={e => setSearchField(e.target.value)} />
                </Col>
            </Row>
        )
    }
}

export default Filter
