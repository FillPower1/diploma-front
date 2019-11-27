import React from 'react'
import './short-news-item.scss'

const ShortNewsItem = props => {

	const { title, description, id, role, onDeleteNews, onEditNews } = props

	return (
		<div className="row">
			<div className="col s8 offset-s2">
				<div className="post-news z-depth-2">
					<div className="post-news__item">
						<div className="post-news__title">
							{title}
						</div>
						<div className="post-news__descr" 
							dangerouslySetInnerHTML={{ __html: description.slice(0, 200) + '...'}}>
						</div>
						<div className="post-news__btn">
							{role === 'admin' &&
								<>
									<button
										onClick={() => onDeleteNews(id)}
										className="waves-effect waves-light btn-small red lighten-1">
										Удалить
									</button>
									<button
										onClick={() => onEditNews(id)}
										className="waves-effect waves-light btn-small orange lighten-1">
										Изменить
									</button>
								</>
							}
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