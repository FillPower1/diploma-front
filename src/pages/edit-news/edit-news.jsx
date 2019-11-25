import React from 'react'
import EditNewsContainer from '../../containers/edit-news'

const EditNews = props => {

	const { id } = props // id, который приходит из match, выше

	return (
		<div className="container">
			<div className="row">
				<EditNewsContainer id={id} />
			</div>
		</div>
	)
}

export default EditNews