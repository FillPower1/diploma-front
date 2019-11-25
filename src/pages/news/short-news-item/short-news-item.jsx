import React from 'react'
import './short-news-item.scss'

const ShortNewsItem = props => {

	const { title, description, id } = props

	return (
		<div className="row">
			<div className="col s8 offset-s2">
				<div className="post-news z-depth-2">
					<div className="post-news__item">
						<div className="post-news__title">
							{title}
						</div>
						<div className="post-news__descr">
							{description.slice(0, 200) + '...'}
						</div>
						<div className="post-news__btn">
							<button onClick={() => props.onFullNewsHandler(id)} className="btn-small">
								Перейти
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShortNewsItem