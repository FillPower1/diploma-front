import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actions from '../data/actions'
import AddNewsForm from '../components/form-components/add-news-form'
import Spinner from '../components/common/spinner'

class EditNews extends Component {

	componentDidMount() {
		this.props.setCurrentNews(this.props.id)
	}

	onEditedSubmitNews = data => {
		this.props.editNews(this.props.id, data)
	}

	render() {

		const { currentUser: { role }, currentNews, isFetching } = this.props

		if (isFetching) {
			return <Spinner />
		}

		if (this.props.ischangedNews) {
			this.props.setFalseChangedNews(false)
			return <Redirect to="/" />
		}

		return (
			<AddNewsForm
				role={role}
				title="Изменение новости"
				submitLabel="Изменить"
				currentNews={currentNews}
				onSubmit={this.onEditedSubmitNews}
			/>
		)
	}

}

const mapStateToProps = state => ({
	currentNews: state.news.currentNews,
	currentUser: state.auth.currentUser,
	isFetching: state.news.isFetching,
	ischangedNews: state.news.ischangedNews
})

const mapDispatchToProps = {
	setCurrentNews: actions.setCurrentNews,
	editNews: actions.editNews,
	setFalseChangedNews: actions.setFalseChangedNews
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNews)