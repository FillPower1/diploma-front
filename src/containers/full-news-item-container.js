import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../data/actions'
import Spinner from '../components/common/spinner'
import FullNewsItem from '../components/full-news-item'

class FullNewsItemContainer extends Component {

	componentDidMount() {
		this.props.setCurrentNews(this.props.id)
	}

	render() {

		const { isFetching, currentNews } = this.props

		if (isFetching) {
			return <Spinner />
		}

		return <FullNewsItem currentNews={currentNews} />
	}
}

const mapStateToProps = state => ({
	currentNews: state.news.currentNews,
	isFetching: state.news.isFetching
})

const mapDispatchToProps = {
	setCurrentNews: actions.setCurrentNews
}

export default connect(mapStateToProps, mapDispatchToProps)(FullNewsItemContainer)