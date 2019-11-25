import React from 'react'
import './full-news-item.scss'

const FullNewsItem = ({ currentNews }) => {

	const { title, description, imageSrc } = currentNews

	return (
		<div className="row">
			<div className="col s8 offset-s2">
				<div className="post-news z-depth-1">
					<div className="post-news__img">
						<img src={`/${imageSrc}`} alt="News Img" />
					</div>
					<div className="post-news__title">
						{title}
					</div>
					<div className="post-news__descr">
						{description}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FullNewsItem