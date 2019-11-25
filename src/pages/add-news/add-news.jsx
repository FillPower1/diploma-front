import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actions from '../../data/actions'
import AddNewsForm from '../../components/form-components/add-news-form'

const AddNews = props => {

	const onAddNews = data => {
		props.addNewNews(data)
	}

	if (props.ischangedNews) {
		props.setFalseChangedNews(false)
		return <Redirect to="/" />
	}

	const { currentUser: { role } } = props

	return (
		<div className="container">
			<div className="row">
				<AddNewsForm 
					role={role} 
					submitLabel="Создать"
					title="Добавление новости"
					onSubmit={onAddNews} 
				/>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser,
	ischangedNews: state.news.ischangedNews
})

const mapDispatchToProps = {
	addNewNews: actions.addNewNews,
	setFalseChangedNews: actions.setFalseChangedNews
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNews)