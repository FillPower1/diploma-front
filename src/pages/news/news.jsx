import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../data/actions'
import { withRouter, Link } from 'react-router-dom'
import ShortNewsItem from './short-news-item'
import Spinner from '../../components/common/spinner'
import './news.scss'

class News extends Component {

	componentDidMount() {
		this.props.setNewsList()
	}

	onFullNewsHandler = id => {
		this.props.history.push(`/news/${id}`)
	}

	onEditNewsHandler = id => {
		this.props.history.push(`/news-edit/${id}`)
	}

	render() {

		const { newsList, isFetching, deleteNews, currentUser: { role } } = this.props

		if (isFetching) {
			return <Spinner />
		}

		return (
			<div className="container">
				<div className="row">
					<div className="news">
						<h1 className="news__title">Новости StoreApp</h1>
						{newsList.map(news => (
							<ShortNewsItem
								role={role}
								{...news}
								key={news.id}
								onEditNews={this.onEditNewsHandler}
								onDeleteNews={deleteNews}
								onFullNewsHandler={this.onFullNewsHandler}
							/>
						))}

						{role === 'admin' &&
							<div className="news__add-btn">
								<Link to="/news-add">
									<button className="btn-small">Добавить новость</button>
								</Link>
							</div>
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	newsList: state.news.newsList,
	isFetching: state.news.isFetching,
	currentUser: state.auth.currentUser
})

const mapDispatchToProps = {
	setNewsList: actions.setNewsList,
	deleteNews: actions.deleteNews,
	editNews: actions.editNews
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(News))