import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../data/actions'
import FullNewsItem from '../components/full-news-item'

class FullNewsItemContainer extends Component {

	componentDidMount() {
		this.props.setCurrentNews(this.props.id)
	}

	state = {
		isLoadedImage: false
	}

	render() {

		const { currentNews } = this.props

		return <FullNewsItem currentNews={currentNews} />
	}
}

const mapStateToProps = state => ({
	currentNews: state.news.currentNews
})

const mapDispatchToProps = {
	setCurrentNews: actions.setCurrentNews
}

export default connect(mapStateToProps, mapDispatchToProps)(FullNewsItemContainer)