import React from 'react'
import NewsContainer from '../../containers/news'
import './news.scss'

const News = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="news">
					<h1 className="news__title">Новости StoreApp</h1>
					<NewsContainer />
				</div>
			</div>
		</div>
	)
}

export default News