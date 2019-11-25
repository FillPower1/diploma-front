import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actions from '../../data/actions'
import AddNewsForm from '../../components/form-components/add-news-form'

const AddNews = props => {

	const onAddNews = data => {
		props.addNewNews(data)
		return <Redirect to="/" /> 
	}

	return (
		<div className="container">
			<div className="row">
				<AddNewsForm onSubmit={onAddNews} />
			</div>
		</div>
	)
}

const mapDispatchToProps = {
	addNewNews: actions.addNewNews
}

export default connect(null, mapDispatchToProps)(AddNews)